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
        const clavePartidaRaw = (req.params.clavePartida || req.query.clavePartida || '21101').toString().trim();
        const idParamRaw = (req.params.idCostos || req.query.idCostos || req.params.idArticulo || req.query.idArticulo || '48').toString().trim();
        const idParamInt = parseInt(idParamRaw, 10) || 0;
        const partidaInt = parseInt(clavePartidaRaw, 10) || 0;

        console.log("--> GENERANDO KÁRDEX CON PARÁMETROS:", {
            partidaTexto: clavePartidaRaw,
            partidaId: partidaInt,
            parametroArticuloRaw: idParamRaw,
            parametroArticuloInt: idParamInt
        });

        // 1. Consulta del Encabezado (directo de cat_articulos sin exclusión por costos)
        const queryEncabezado = `
            SELECT 
                par.clave AS clave_partida,
                art.id AS id_articulo,
                art.clave AS clave_articulo,
                art.unidad_medida,
                art.descripcion AS nom_articulo,
                (
                    SELECT m.fecha 
                    FROM movimientosdg m 
                    WHERE m.id_articulo = art.id 
                    ORDER BY m.fecha DESC, m.id DESC 
                    LIMIT 1
                ) AS fecha_ult_compra,
                COALESCE(
                    (SELECT c.precio_unitario FROM costos c WHERE c.id_articulo = art.id ORDER BY c.id DESC LIMIT 1),
                    0
                ) AS precio_unitario,
                COALESCE(
                    (SELECT SUM(com.total_articulos) 
                     FROM compras com 
                     INNER JOIN costos cos ON cos.id = com.id_costo 
                     WHERE cos.id_articulo = art.id), 
                    0
                ) AS total_entradas_compras
            FROM cat_articulos art
                INNER JOIN cat_partidas par ON par.id = art.id_partidas
            WHERE (par.clave = $1 OR par.id = $4)
              AND (
                  art.id = $2 
                  OR art.clave = $3
                  OR art.id IN (SELECT id_articulo FROM costos WHERE id = $2)
              )
            LIMIT 1
        `;

        // 2. Consulta del Detalle (amarrado directo por id_articulo con LEFT JOIN a costos)
        const queryDetalle = `
            SELECT 
                mdg.folio_transferencia AS "folio",
                COALESCE(ct.descripcion, 'OFICINAS CENTRALES') AS "plantel_destino",
                COALESCE(mdg.existencia_inicial, 0) AS existencia_inicial,
                COALESCE(mdg.num_articulos_solicitados, 0) AS "ventas_acumuladas",
                COALESCE(cos.precio_unitario, 0) AS "costo",
                COALESCE(mdg.existencia_final, 0) AS "existencia",
                mdg.fecha AS "fecha"
            FROM movimientosdg mdg
                INNER JOIN cat_articulos art ON art.id = mdg.id_articulo
                INNER JOIN cat_partidas par ON par.id = art.id_partidas 
                LEFT JOIN costos cos ON cos.id = mdg.id_costos 
                LEFT JOIN centro_trabajo ct ON ct.id = mdg.id_centrotrabajo_transfiere
            WHERE (par.clave = $1 OR par.id = $4)
              AND (
                  art.id = $2 
                  OR art.clave = $3
                  OR mdg.id_articulo = $2
                  OR mdg.id_costos = $2
              )
            ORDER BY mdg.fecha ASC, mdg.id ASC
        `;

        const params = [clavePartidaRaw, idParamInt, idParamRaw, partidaInt];

        const [resEncabezado, resDetalle] = await Promise.all([
            pool.query(queryEncabezado, params),
            pool.query(queryDetalle, params)
        ]);

        const headerData = resEncabezado.rows[0] || {};
        const movimientos = resDetalle.rows;

        console.log(`--> Movimientos recuperados para el PDF: ${movimientos.length}`);

        // Totales de Salidas y Entradas
        const totalSalidas = movimientos.reduce((acc, curr) => acc + Number(curr.ventas_acumuladas || 0), 0);

        let totalEntradas = Number(headerData.total_entradas_compras || 0);
        if (totalEntradas === 0 && movimientos.length > 0) {
            totalEntradas = Number(movimientos[0].existencia_inicial || 0);
        }

        // Costo Promedio
        let costoPromedio = 0;
        if (movimientos.length > 0) {
            const sumCostos = movimientos.reduce((acc, curr) => acc + Number(curr.costo || 0), 0);
            costoPromedio = sumCostos / movimientos.length;
        } else if (headerData.precio_unitario) {
            costoPromedio = Number(headerData.precio_unitario);
        }

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `inline; filename="kardex_${clavePartidaRaw}_${idParamRaw}.pdf"`);

        const doc = new PDFDocument({ size: 'LETTER', margin: 30 });
        doc.pipe(res);

        const totalWidth = 552;
        const bannerPath = path.join(__dirname, '../../reports/imagenes/banner.png');
        const piePath = path.join(__dirname, '../../reports/imagenes/pie.png');

        const dibujarPlantilla = () => {
            if (fs.existsSync(bannerPath)) {
                doc.image(bannerPath, 30, 18, { width: totalWidth });
            }
            if (fs.existsSync(piePath)) {
                doc.image(piePath, 30, 715, { width: totalWidth });
            }
        };

        dibujarPlantilla();

        // --- 1. ENCABEZADOS INSTITUCIONALES (Y = 112) ---
        let yTitulo = 112;
        doc.fontSize(8.5).font('Helvetica-Bold')
            .text('DIRECCIÓN ADMINISTRATIVA', 30, yTitulo, { width: totalWidth, align: 'center' })
            .text('DEPARTAMENTO DE RECURSOS MATERIALES Y SERVICIOS GENERALES', 30, yTitulo + 12, { width: totalWidth, align: 'center' });

        doc.fontSize(13).font('Helvetica-Bold')
            .text('KÁRDEX', 30, yTitulo + 28, { width: totalWidth, align: 'center' });

        // --- 2. METADATOS DEL ARTÍCULO (Y = 160) ---
        const metaY = yTitulo + 48;
        const claveCompleta = `${headerData.clave_partida || clavePartidaRaw}-${headerData.clave_articulo || idParamRaw}`;

        // Columna Izquierda
        doc.fontSize(9).font('Helvetica-Bold')
            .text('Clave del artículo:', 30, metaY)
            .text('Unidad de Salida:', 30, metaY + 16)
            .text('Unidad de Entrada:', 30, metaY + 32);

        doc.font('Helvetica')
            .text(claveCompleta, 130, metaY)
            .text(headerData.unidad_medida || 'N/A', 130, metaY + 16)
            .text(headerData.unidad_medida || 'N/A', 130, metaY + 32);

        // Columna Derecha
        doc.font('Helvetica-Bold')
            .text('Descripción:', 280, metaY)
            .text('Fecha últ. compra:', 280, metaY + 16)
            .text('Tipo de Costeo:', 280, metaY + 32)
            .text('Costo Promedio:', 280, metaY + 48);

        doc.font('Helvetica')
            .text(headerData.nom_articulo || 'Sin descripción', 380, metaY, { width: 200, lineBreak: false, ellipsis: true })
            .text(headerData.fecha_ult_compra || 'Sin compras', 380, metaY + 16)
            .text('P.E.P.S.', 380, metaY + 32)
            .text(`$ ${costoPromedio.toFixed(6)}`, 380, metaY + 48);

        // --- 3. TABLA DE MOVIMIENTOS (Y = 228) ---
        const tableY = metaY + 68;
        const rowHeight = 22;

        const dibujarCabeceraTabla = (yPos) => {
            const hHeader = 20;
            doc.rect(30, yPos, totalWidth, hHeader).fillAndStroke('#e9ecef', '#333333');
            doc.fillColor('black').font('Helvetica-Bold').fontSize(7.5);

            doc.text('Doc/Folio', 32, yPos + 5, { width: 45, align: 'center' });
            doc.text('Plantel/Destino', 80, yPos + 5, { width: 145, align: 'left' });
            doc.text('Exist. Inicial', 230, yPos + 5, { width: 55, align: 'right' });
            doc.text('Ventas Acum.', 290, yPos + 5, { width: 55, align: 'right' });
            doc.text('Costo', 350, yPos + 5, { width: 55, align: 'right' });
            doc.text('Existencia', 410, yPos + 5, { width: 55, align: 'right' });
            doc.text('Fecha', 470, yPos + 5, { width: 105, align: 'center' });
        };

        dibujarCabeceraTabla(tableY);

        let currentY = tableY + 20;
        doc.font('Helvetica').fontSize(7.5);

        if (movimientos.length === 0) {
            doc.rect(30, currentY, totalWidth, rowHeight).stroke('#cccccc');
            doc.text('No hay movimientos registrados para este criterio.', 35, currentY + 5, { width: totalWidth - 10, align: 'center' });
            currentY += rowHeight;
        } else {
            movimientos.forEach(mov => {
                if (currentY + rowHeight > 520) {
                    doc.addPage({ size: 'LETTER', margin: 30 });
                    dibujarPlantilla();
                    currentY = 80;
                    dibujarCabeceraTabla(currentY);
                    currentY += 20;
                    doc.font('Helvetica').fontSize(7.5);
                }

                const existIni = Number(mov.existencia_inicial || 0);
                const ventas = Number(mov.ventas_acumuladas || 0);
                const costo = Number(mov.costo || 0);
                const existFin = Number(mov.existencia || 0);

                doc.rect(30, currentY, totalWidth, rowHeight).stroke('#dddddd');
                doc.text((mov.folio || '-').toString(), 32, currentY + 5, { width: 45, align: 'center' });

                doc.fontSize(7).text((mov.plantel_destino || 'OFICINAS CENTRALES').toUpperCase(), 80, currentY + 5, {
                    width: 145,
                    align: 'left',
                    lineBreak: false,
                    ellipsis: true
                });
                doc.fontSize(7.5);

                doc.text(existIni.toFixed(2), 230, currentY + 5, { width: 55, align: 'right' });
                doc.text(ventas.toFixed(2), 290, currentY + 5, { width: 55, align: 'right' });
                doc.text(`$ ${costo.toFixed(2)}`, 350, currentY + 5, { width: 55, align: 'right' });
                doc.text(existFin.toFixed(2), 410, currentY + 5, { width: 55, align: 'right' });
                doc.text(mov.fecha || '', 470, currentY + 5, { width: 105, align: 'center' });

                currentY += rowHeight;
            });
        }

        // --- 4. TOTALES (Y = 558) ---
        const boxTotalesY = 558;

        doc.fontSize(8.5).font('Helvetica-Bold');
        doc.text('Total Entradas:', 370, boxTotalesY, { width: 120, align: 'right' });
        doc.font('Helvetica').text(totalEntradas.toFixed(2), 495, boxTotalesY, { width: 85, align: 'right' });

        doc.font('Helvetica-Bold').text('Total Salidas:', 370, boxTotalesY + 14, { width: 120, align: 'right' });
        doc.font('Helvetica').text(totalSalidas.toFixed(2), 495, boxTotalesY + 14, { width: 85, align: 'right' });

        // --- 5. FIRMAS INSTITUCIONALES (Y = 590) ---
        const firmasY = 590;
        const firmasHeight = 65;
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
                    .text(f.nombre, xPos + 2, firmasY + 28, { width: firmaBoxWidth - 4, align: 'center' });
            }
            doc.fontSize(5.2).font('Helvetica')
                .text(f.cargo, xPos + 2, firmasY + 38, { width: firmaBoxWidth - 4, align: 'center' });
        });

        doc.end();

    } catch (error) {
        console.error('Error al generar PDF de Kárdex:', error);
        res.status(500).json({ error: 'Error al consultar la base de datos o generar el documento' });
    }
};

module.exports = { pruebaReporte };