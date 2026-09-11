const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

// Helper interno para convertir imágenes locales a Base64
const imgToBase64 = (filePath) => {
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath).replace('.', '');
    const bitmap = fs.readFileSync(filePath);
    return `data:image/${ext === 'svg' ? 'svg+xml' : ext};base64,${bitmap.toString('base64')}`;
  }
  return null;
};

// Rutas a los membretes oficiales
const bannerPath = path.join(__dirname, '../../reports/imagenes/banner.png');
const piePath = path.join(__dirname, '../../reports/imagenes/pie.png');

/**
 * Compila una plantilla HTML con datos y retorna el Buffer del PDF
 * @param {string} templateName - Nombre del archivo en src/templates (ej. 'reporteKardex.html')
 * @param {object} data - Datos dinámicos para inyectar en Handlebars
 * @param {object} pdfOptions - Opciones adicionales para page.pdf (landscape, márgenes, etc.)
 */
async function generarPDF(templateName, data, pdfOptions = {}) {
  let browser = null;
  try {
    const templatePath = path.join(__dirname, `../templates/${templateName}`);
    if (!fs.existsSync(templatePath)) {
      throw new Error(`No se encontró la plantilla en: ${templatePath}`);
    }

    const templateHtml = fs.readFileSync(templatePath, 'utf8');
    const compiledTemplate = handlebars.compile(templateHtml);

    // Inyectamos automáticamente los banners base64 a cualquier reporte
    const htmlFinal = compiledTemplate({
      ...data,
      bannerBase64: imgToBase64(bannerPath),
      pieBase64: imgToBase64(piePath)
    });

    browser = await puppeteer.launch({
      headless: true, // Compatible con Node 14.21 y Node 16
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(htmlFinal, { waitUntil: 'networkidle0' });

    const defaultOptions = {
      format: 'Letter',
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="width: 100%; font-size: 8pt; font-family: Helvetica, Arial, sans-serif; font-weight: bold; color: #333; text-align: right; padding-right: 12mm; padding-top: 5mm;">
          Página <span class="pageNumber"></span> de <span class="totalPages"></span>
        </div>
      `,
      footerTemplate: '<div></div>',
      margin: {
        top: '12mm',
        bottom: '15mm',
        left: '12mm',
        right: '12mm'
      },
      ...pdfOptions
    };

    const pdfBuffer = await page.pdf(defaultOptions);
    await browser.close();
    return pdfBuffer;

  } catch (error) {
    if (browser) await browser.close();
    throw error;
  }
}

module.exports = { generarPDF };