const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

// Reutiliza la conexión del proyecto en lugar de crear un Pool nuevo
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: Number(process.env.PORT_BD || 5432),
});

const ReporteGeneralPorPlantel = async (req, res) => {
  const idPlantel = parseInt(req.params.idPlantel);

  if (!idPlantel) {
    return res.status(400).json({ message: 'El ID del plantel es obligatorio y debe ser numérico' });
  }

  let browser;
  try {
    // 1. Datos del plantel
    const plantelResult = await pool.query(
      'SELECT descripcion, administrativo FROM centro_trabajo WHERE id = $1',
      [idPlantel]
    );
    const plantel = (plantelResult.rows && plantelResult.rows[0]) || { descripcion: 'PLANTEL NO ESPECIFICADO' };

    // 2. Existencias
    const articulosResult = await pool.query(
      `SELECT existencias, LOWER(nombre_producto) AS nombre_producto 
       FROM almacen 
       WHERE id_centrotrabajo = $1 
       ORDER BY nombre_producto ASC`,
      [idPlantel]
    );

    const filas = articulosResult.rows || articulosResult;
    const articulos = filas.map(item => ({
      existencias: item.existencias,
      nombre_producto: item.nombre_producto 
        ? item.nombre_producto.charAt(0).toUpperCase() + item.nombre_producto.slice(1) 
        : ''
    }));

    // 3. Cargar plantilla HTML
    const templatePath = path.join(__dirname, '../templates/reporteGeneralPorPlantel.html');
    const templateHtml = fs.readFileSync(templatePath, 'utf8');

    // 4. Buscar Banner en las rutas habituales del proyecto
    let bannerBase64 = '';
    const posiblesRutasBanner = [
      path.join(__dirname, '../reports/imagenes/Banner.png'),
      path.join(__dirname, '../../reports/imagenes/Banner.png'),
      path.join(__dirname, '../imagenes/Banner.png'),
      path.join(__dirname, '../../public/imagenes/Banner.png'),
      path.join(process.cwd(), 'reports/imagenes/Banner.png'),
      path.join(process.cwd(), 'src/reports/imagenes/Banner.png')
    ];

    for (const ruta of posiblesRutasBanner) {
      if (fs.existsSync(ruta)) {
        const bannerBitmap = fs.readFileSync(ruta);
        bannerBase64 = `data:image/png;base64,${bannerBitmap.toString('base64')}`;
        break;
      }
    }

    // 5. Compilar HTML
    const template = handlebars.compile(templateHtml);
    const htmlFinal = template({
      plantel,
      articulos,
      bannerBase64
    });

    // 6. Lanzar Puppeteer
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(htmlFinal, { waitUntil: 'networkidle0' });

    // Pie idéntico a Jasper: "Pág. X" a la derecha
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: `
        <div style="width: 100%; font-size: 9pt; font-family: Arial, sans-serif; text-align: right; padding-right: 20mm; color: #000;">
          Pág. <span class="pageNumber"></span>
        </div>
      `,
      margin: {
        top: '20mm',
        bottom: '22mm',
        left: '20mm',
        right: '20mm'
      }
    });

    await browser.close();

    // 7. Servir PDF
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="ReporteGeneralPorPlantel.pdf"',
      'Content-Length': pdfBuffer.length
    });

    return res.send(pdfBuffer);

  } catch (error) {
    if (browser) await browser.close();
    console.error('Error generando ReporteGeneralPorPlantel:', error);
    return res.status(500).json({ message: 'Error interno al generar el reporte PDF' });
  }
};

module.exports = {
  ReporteGeneralPorPlantel
};