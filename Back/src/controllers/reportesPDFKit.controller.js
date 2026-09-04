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

        // 1. Consulta del Encabezado (LEFT JOIN a unidad_medida)
        const queryEncabezado = `
            SELECT 
                par.clave AS clave_partida,
                art.id AS id_articulo,
                art.clave AS clave_articulo,
                COALESCE(um.nombre_medida, um.nombre_medida, art.unidad_medida, 'N/A') AS unidad_medida,
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
                LEFT JOIN unidad_medida um ON um.id = art.unidad_medida_id
            WHERE (par.clave = $1 OR par.id = $4)
              AND (
                  art.id = $2 
                  OR art.clave = $3
                  OR art.id IN (SELECT id_articulo FROM costos WHERE id = $2)
              )
            LIMIT 1
        `;
        // 2. Consulta del Detalle
        const queryDetalle = `
            SELECT 
                mdg.folio_transferencia AS "folio",
                COALESCE(ct.descripcion, 'OFICINAS CENTRALES') AS "plantel_destino",
                COALESCE(mdg.existencia_inicial, 0) AS existencia_inicial,
                COALESCE(mdg.num_articulos_solicitados, 0) AS "ventas_acumuladas",
                COALESCE(cos.precio_unitario, 0) AS "costo_unitario",
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

        // Totales
        const totalSalidas = movimientos.reduce((acc, curr) => acc + Number(curr.ventas_acumuladas || 0), 0);

        let totalEntradas = Number(headerData.total_entradas_compras || 0);
        if (totalEntradas === 0 && movimientos.length > 0) {
            totalEntradas = Number(movimientos[0].existencia_inicial || 0);
        }

        // Costo Promedio Unitario
        let costoPromedio = 0;
        if (movimientos.length > 0) {
            const sumCostos = movimientos.reduce((acc, curr) => acc + Number(curr.costo_unitario || 0), 0);
            costoPromedio = sumCostos / movimientos.length;
        } else if (headerData.precio_unitario) {
            costoPromedio = Number(headerData.precio_unitario);
        }

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `inline; filename="kardex_${clavePartidaRaw}_${idParamRaw}.pdf"`);

        // Documento con margen inferior 0 para controlar el fondo absoluto
        const doc = new PDFDocument({ 
            size: 'LETTER', 
            margins: { top: 30, bottom: 0, left: 30, right: 30 }, 
            bufferPages: true 
        });
        doc.pipe(res);

        const totalWidth = 552;
        const pageWidth = 612;   // Hoja Carta: 612 pt de ancho
        const pageHeight = 792;  // Hoja Carta: 792 pt de alto
        const bannerWidth = 440;
        const bannerX = (pageWidth - bannerWidth) / 2;

        const bannerPath = path.join(__dirname, '../../reports/imagenes/banner.png');
        const piePath = path.join(__dirname, '../../reports/imagenes/pie.png');

        // Cálculo de dimensiones proporcionales del pie de página
        let pieHeight = 50;
        if (fs.existsSync(piePath)) {
            const imgPie = doc.openImage(piePath);
            pieHeight = (imgPie.height * pageWidth) / imgPie.width;
        }
        const pieY = pageHeight - pieHeight; // Posición exacta en la base

        // Totales fijos justo arriba del pie de página
        const boxTotalesY = pieY - 32;

        const dibujarPlantilla = () => {
            if (fs.existsSync(bannerPath)) {
                doc.image(bannerPath, bannerX, 16, { width: bannerWidth });
            }
            if (fs.existsSync(piePath)) {
                doc.image(piePath, 0, pieY, { width: pageWidth });
            }
        };

        dibujarPlantilla();

        // --- 1. ENCABEZADOS INSTITUCIONALES (Y = 95) ---
        let yTitulo = 95;
        doc.fontSize(8.5).font('Helvetica-Bold')
            .text('DIRECCIÓN ADMINISTRATIVA', 30, yTitulo, { width: totalWidth, align: 'center' })
            .text('DEPARTAMENTO DE RECURSOS MATERIALES Y SERVICIOS GENERALES', 30, yTitulo + 12, { width: totalWidth, align: 'center' });

        doc.fontSize(12).font('Helvetica-Bold')
            .text('KÁRDEX', 30, yTitulo + 26, { width: totalWidth, align: 'center' });

    // --- 2. METADATOS DEL ARTÍCULO ---
        const metaY = yTitulo + 44; // Y = 139
        const claveCompleta = `${headerData.clave_partida || clavePartidaRaw}-${headerData.clave_articulo || idParamRaw}`;

        // Descripción arriba de la clave
        doc.fontSize(8.5).font('Helvetica-Bold').text('Descripción:', 30, metaY);
        doc.font('Helvetica').text(headerData.nom_articulo || 'Sin descripción', 95, metaY, { width: 485, lineBreak: false, ellipsis: true });

        // Fila 1
        const row1Y = metaY + 14;
        doc.font('Helvetica-Bold').text('Clave del artículo:', 30, row1Y);
        doc.font('Helvetica').text(claveCompleta, 120, row1Y);

        doc.font('Helvetica-Bold').text('Fecha últ. compra:', 320, row1Y);
        doc.font('Helvetica').text(headerData.fecha_ult_compra || 'Sin compras', 415, row1Y);

        // Fila 2
        const row2Y = row1Y + 13;
        doc.font('Helvetica-Bold').text('Unidad de Entrada:', 30, row2Y);
        doc.font('Helvetica').text(headerData.unidad_medida, 120, row2Y);

        doc.font('Helvetica-Bold').text('Tipo de Costeo:', 320, row2Y);
        doc.font('Helvetica-Bold').text('P.E.P.S.', 415, row2Y); // <-- AQUÍ EN NEGRITAS

        // Fila 3
        const row3Y = row2Y + 13;
        doc.font('Helvetica-Bold').text('Unidad de Salida:', 30, row3Y);
        doc.font('Helvetica').text(headerData.unidad_medida, 120, row3Y);

        doc.font('Helvetica-Bold').text('Costo Promedio:', 320, row3Y);
        doc.font('Helvetica').text(`$ ${costoPromedio.toFixed(4)}`, 415, row3Y);

        // --- 3. TABLA DE MOVIMIENTOS ---
        const tableY = row3Y + 20; // Y = 202
        const rowHeight = 20;

        const dibujarCabeceraTabla = (yPos) => {
            const hHeader = 18;
            doc.rect(30, yPos, totalWidth, hHeader).fillAndStroke('#e9ecef', '#333333');
            doc.fillColor('black').font('Helvetica-Bold').fontSize(7.5);

            doc.text('Doc/Folio', 32, yPos + 5, { width: 45, align: 'center' });
            doc.text('Plantel/Destino', 80, yPos + 5, { width: 140, align: 'left' });
            doc.text('Exist. Inicial', 225, yPos + 5, { width: 55, align: 'right' });
            doc.text('Ventas Acum.', 285, yPos + 5, { width: 55, align: 'right' });
            doc.text('Importe Total', 345, yPos + 5, { width: 65, align: 'right' });
            doc.text('Existencia', 415, yPos + 5, { width: 55, align: 'right' });
            doc.text('Fecha', 475, yPos + 5, { width: 100, align: 'center' });
        };

        dibujarCabeceraTabla(tableY);

        let currentY = tableY + 18;
        doc.font('Helvetica').fontSize(7.5);

        if (movimientos.length === 0) {
            doc.rect(30, currentY, totalWidth, rowHeight).stroke('#cccccc');
            doc.text('No hay movimientos registrados para este criterio.', 35, currentY + 5, { width: totalWidth - 10, align: 'center' });
            currentY += rowHeight;
        } else {
            movimientos.forEach(mov => {
                // Si la fila choca con la zona reservada de totales, salta de página
                if (currentY + rowHeight > boxTotalesY - 12) {
                    doc.addPage();
                    dibujarPlantilla();
                    currentY = 80;
                    dibujarCabeceraTabla(currentY);
                    currentY += 18;
                    doc.font('Helvetica').fontSize(7.5);
                }

                const existIni = Number(mov.existencia_inicial || 0);
                const ventas = Number(mov.ventas_acumuladas || 0);
                const costoUni = Number(mov.costo_unitario || 0);
                const importeTotal = ventas * costoUni;
                const existFin = Number(mov.existencia || 0);

                doc.rect(30, currentY, totalWidth, rowHeight).stroke('#dddddd');
                doc.text((mov.folio || '-').toString(), 32, currentY + 5, { width: 45, align: 'center' });

                doc.fontSize(7).text((mov.plantel_destino || 'OFICINAS CENTRALES').toUpperCase(), 80, currentY + 5, {
                    width: 140,
                    align: 'left',
                    lineBreak: false,
                    ellipsis: true
                });
                doc.fontSize(7.5);

                doc.text(existIni.toFixed(2), 225, currentY + 5, { width: 55, align: 'right' });
                doc.text(ventas.toFixed(2), 285, currentY + 5, { width: 55, align: 'right' });
                doc.text(`$ ${importeTotal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`, 345, currentY + 5, { width: 65, align: 'right' });
                doc.text(existFin.toFixed(2), 415, currentY + 5, { width: 55, align: 'right' });
                doc.text(mov.fecha || '', 475, currentY + 5, { width: 100, align: 'center' });

                currentY += rowHeight;
            });
        }

        // --- 4. TOTALES (Fijos abajo, justo encima del pie de página) ---
        doc.fontSize(8.5).font('Helvetica-Bold');
        doc.text('Total Entradas:', 370, boxTotalesY, { width: 120, align: 'right' });
        doc.font('Helvetica').text(totalEntradas.toFixed(2), 495, boxTotalesY, { width: 85, align: 'right' });

        doc.font('Helvetica-Bold').text('Total Salidas:', 370, boxTotalesY + 12, { width: 120, align: 'right' });
        doc.font('Helvetica').text(totalSalidas.toFixed(2), 495, boxTotalesY + 12, { width: 85, align: 'right' });

        // --- 5. NUMERACIÓN DINÁMICA (Esquina superior derecha en Y = 20) ---
        const range = doc.bufferedPageRange();
        for (let i = 0; i < range.count; i++) {
            doc.switchToPage(i);
            doc.font('Helvetica-Bold')
               .fontSize(8)
               .fillColor('#333333')
               .text(`Página ${i + 1} de ${range.count}`, 440, 20, { width: 142, align: 'right' });
        }

        doc.end();

    } catch (error) {
        console.error('Error al generar PDF de Kárdex:', error);
        res.status(500).json({ error: 'Error al consultar la base de datos o generar el documento' });
    }
};

module.exports = { pruebaReporte };