const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE_BD,
    port: process.env.PORT_BD
});

const pruebaReporte = async (req, res) => {
    try {
        const clavePartida = (req.params.clavePartida || req.query.clavePartida || '21101').toString();
        // Convertimos a entero para quitar ceros a la izquierda (ej: '048' -> 48)
        const idParamRaw = (req.params.idCostos || req.query.idCostos || '48').toString();
        const idParamInt = parseInt(idParamRaw, 10) || 0;

        // 1. Consulta del Encabezado (kardex_header_test1)
        const queryEncabezado = `
            SELECT 
                par.clave AS clave_partida,
                art.clave AS clave_articulo,
                art.unidad_medida,
                COALESCE(art.descripcion, mdg.nom_articulo) AS nom_articulo,
                mdg.fecha AS fecha_ult_compra,
                cos.precio_unitario
            FROM cat_articulos art
                INNER JOIN cat_partidas par ON par.id = art.id_partidas
                LEFT JOIN costos cos ON cos.id_articulo = art.id
                LEFT JOIN movimientosdg mdg ON mdg.id_costos = cos.id
            WHERE par.clave = $1
              AND (
                  art.id = $2 
                  OR cos.id = $2 
                  OR mdg.id_costos = $2 
                  OR art.clave = $3
              )
            ORDER BY mdg.fecha DESC NULLS LAST
            LIMIT 1
        `;

        // 2. Consulta del Detalle (kardex_detail_test3)
        const queryDetalle = `
            SELECT 
                mdg.folio_transferencia AS "folio",
                COALESCE(mdg.existencia_inicial, 0) AS existencia_inicial,
                COALESCE(SUM(mdg.num_articulos_solicitados), 0) AS "ventas_acumuladas",
                COALESCE(cos.precio_unitario, 0) AS "costo",
                COALESCE(mdg.existencia_final, 0) AS "existencia",
                mdg.fecha AS "fecha"
            FROM movimientosdg mdg
                INNER JOIN costos cos ON cos.id = mdg.id_costos 
                LEFT JOIN compras com ON com.id_costo = cos.id
                INNER JOIN cat_articulos art ON art.id = cos.id_articulo 
                INNER JOIN cat_partidas par ON par.id = art.id_partidas 
            WHERE par.clave = $1
              AND (
                  mdg.id_costos = $2 
                  OR cos.id = $2 
                  OR art.id = $2 
                  OR art.clave = $3
              )
            GROUP BY 
                mdg.folio_transferencia,
                mdg.existencia_inicial,
                mdg.num_articulos_solicitados,
                cos.precio_unitario,
                mdg.existencia_final,
                mdg.fecha
            ORDER BY mdg.fecha ASC
        `;

        const [resEncabezado, resDetalle] = await Promise.all([
            pool.query(queryEncabezado, [clavePartida, idParamInt, idParamRaw]),
            pool.query(queryDetalle, [clavePartida, idParamInt, idParamRaw])
        ]);

        const headerData = resEncabezado.rows[0] || {};
        const movimientos = resDetalle.rows;

        // Variable Costo Promedio (CostoPromedio en el XML de Jasper)
        let costoPromedio = 0;
        if (movimientos.length > 0) {
            const sumCostos = movimientos.reduce((acc, curr) => acc + Number(curr.costo || 0), 0);
            costoPromedio = sumCostos / movimientos.length;
        } else if (headerData.precio_unitario) {
            costoPromedio = Number(headerData.precio_unitario);
        }

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `inline; filename="kardex_${clavePartida}_${idParamRaw}.pdf"`);

        const doc = new PDFDocument({ size: 'LETTER', margin: 30 });
        doc.pipe(res);

        const totalWidth = 552;
        const bannerPath = path.join(__dirname, '../../reports/imagenes/banner.png');
        const piePath = path.join(__dirname, '../../reports/imagenes/pie.png');

        const dibujarPlantilla = () => {
            if (fs.existsSync(bannerPath)) {
                doc.image(bannerPath, 30, 20, { width: totalWidth });
            }
            if (fs.existsSync(piePath)) {
                doc.image(piePath, 30, 690, { width: totalWidth });
            }
        };

        dibujarPlantilla();

        // --- ENCABEZADO ---
        let yHeader = 95;
        doc.fontSize(9).font('Helvetica-Bold').fillColor('#b30000')
           .text('REPORTE KÁRDEX', 420, yHeader, { align: 'right' })
           .fillColor('black');

        doc.fontSize(7.5).font('Helvetica-Bold')
           .text('DIRECCIÓN ADMINISTRATIVA', 30, yHeader + 10, { align: 'center' })
           .text('DEPARTAMENTO DE RECURSOS MATERIALES Y SERVICIOS GENERALES', { align: 'center' });

        // --- RECUADRO METADATOS (Jasper pageHeader) ---
        const metaY = yHeader + 32;
        doc.lineWidth(0.5);
        doc.rect(30, metaY, totalWidth, 54).stroke('#333333');
        doc.moveTo(270, metaY).lineTo(270, metaY + 54).stroke();

        const claveCompleta = `${headerData.clave_partida || clavePartida}-${headerData.clave_articulo || idParamRaw}`;

        // Columna Izquierda
        doc.fontSize(7).font('Helvetica-Bold')
           .text('Clave del artículo:', 35, metaY + 5)
           .text('Unidad de Salida:', 35, metaY + 20)
           .text('Unidad de Entrada:', 35, metaY + 35);

        doc.font('Helvetica')
           .text(claveCompleta, 115, metaY + 5)
           .text(headerData.unidad_medida || 'N/A', 115, metaY + 20)
           .text(headerData.unidad_medida || 'N/A', 115, metaY + 35);

        // Columna Derecha
        doc.font('Helvetica-Bold')
           .text('Descripción:', 275, metaY + 5)
           .text('Fecha de últ. compra:', 275, metaY + 18)
           .text('Tipo de Costeo:', 275, metaY + 30)
           .text('Costo Promedio:', 275, metaY + 42);

        doc.font('Helvetica')
           .text(headerData.nom_articulo || 'Sin descripción', 360, metaY + 5, { width: 215, lineBreak: false, ellipsis: true })
           .text(headerData.fecha_ult_compra || 'Sin compras', 360, metaY + 18)
           .text('P.E.P.S.', 360, metaY + 30)
           .text(`$ ${costoPromedio.toFixed(6)}`, 360, metaY + 42);

        // --- TABLA DE MOVIMIENTOS (Jasper detail table) ---
        const tableY = metaY + 62;
        const rowHeight = 16;

        const dibujarCabeceraTabla = (yPos) => {
            doc.rect(30, yPos, totalWidth, rowHeight).fillAndStroke('#e6e6e6', '#333333');
            doc.fillColor('black').font('Helvetica-Bold').fontSize(6.5);
            doc.text('Doc/Folio', 32, yPos + 5, { width: 65, align: 'center' });
            doc.text('Exist. Inicial', 100, yPos + 5, { width: 75, align: 'right' });
            doc.text('Ventas Acum.', 180, yPos + 5, { width: 75, align: 'right' });
            doc.text('Costo', 260, yPos + 5, { width: 75, align: 'right' });
            doc.text('Existencia', 340, yPos + 5, { width: 75, align: 'right' });
            doc.text('Fecha', 425, yPos + 5, { width: 145, align: 'center' });
        };

        dibujarCabeceraTabla(tableY);

        let currentY = tableY + rowHeight;
        doc.font('Helvetica').fontSize(6.5);

        if (movimientos.length === 0) {
            doc.rect(30, currentY, totalWidth, rowHeight).stroke('#cccccc');
            doc.text('No hay movimientos registrados para este criterio.', 35, currentY + 5, { width: totalWidth - 10, align: 'center' });
            currentY += rowHeight;
        } else {
            movimientos.forEach(mov => {
                if (currentY + rowHeight > 560) {
                    doc.addPage({ size: 'LETTER', margin: 30 });
                    dibujarPlantilla();
                    currentY = 100;
                    dibujarCabeceraTabla(currentY);
                    currentY += rowHeight;
                    doc.font('Helvetica').fontSize(6.5);
                }

                const existIni = Number(mov.existencia_inicial || 0);
                const ventas = Number(mov.ventas_acumuladas || 0);
                const costo = Number(mov.costo || 0);
                const existFin = Number(mov.existencia || 0);

                doc.rect(30, currentY, totalWidth, rowHeight).stroke('#cccccc');
                doc.text((mov.folio || '-').toString(), 32, currentY + 5, { width: 65, align: 'center' });
                doc.text(existIni.toFixed(2), 100, currentY + 5, { width: 75, align: 'right' });
                doc.text(ventas.toFixed(2), 180, currentY + 5, { width: 75, align: 'right' });
                doc.text(`$ ${costo.toFixed(4)}`, 260, currentY + 5, { width: 75, align: 'right' });
                doc.text(existFin.toFixed(2), 340, currentY + 5, { width: 75, align: 'right' });
                doc.text(mov.fecha || '', 425, currentY + 5, { width: 145, align: 'center' });

                currentY += rowHeight;
            });
        }

        // --- FIRMAS ---
        const firmasY = 575;
        const firmasHeight = 72;
        const firmaBoxWidth = totalWidth / 4;

        const firmas = [
            { titulo: 'RECIBIÓ', nombre: '', cargo: 'DIRECTOR/JEFE\nDEPTO/AUXILIAR' },
            { titulo: 'ENTREGÓ', nombre: '', cargo: 'ENCARGADO DE ALMACEN' },
            { titulo: 'REVISÓ', nombre: 'LIC. ISRAEL SOBERANIZ MORALES', cargo: 'JEFE DEL DEPARTAMENTO DE\nRECURSOS MATERIALES Y\nSERVICIOS GENERALES' },
            { titulo: 'AUTORIZÓ', nombre: 'M.A. ADRIANA P. HERNANDEZ HERNANDEZ', cargo: 'ENCARGADA DE DESPACHO DE LA\nDIRECCIÓN ADMINISTRATIVA' }
        ];

        firmas.forEach((f, idx) => {
            const xPos = 30 + (idx * firmaBoxWidth);
            doc.rect(xPos, firmasY, firmaBoxWidth, firmasHeight).stroke('#333333');
            
            doc.font('Helvetica-Bold').fontSize(6.5)
               .text(f.titulo, xPos + 2, firmasY + 4, { width: firmaBoxWidth - 4, align: 'center' });

            if (f.nombre) {
                doc.fontSize(5.8).font('Helvetica-Bold')
                   .text(f.nombre, xPos + 2, firmasY + 36, { width: firmaBoxWidth - 4, align: 'center' });
            }
            doc.fontSize(5.2).font('Helvetica')
               .text(f.cargo, xPos + 2, firmasY + 45, { width: firmaBoxWidth - 4, align: 'center' });
        });

        doc.end();

    } catch (error) {
        console.error('Error al generar PDF de Kárdex:', error);
        res.status(500).json({ error: 'Error al consultar la base de datos o generar el documento' });
    }
};

module.exports = { pruebaReporte };