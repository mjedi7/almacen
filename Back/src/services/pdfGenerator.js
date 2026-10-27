const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

const imgToBase64 = (filePath) => {
  if (!fs.existsSync(filePath)) return null;
  const ext = path.extname(filePath).replace('.', '').toLowerCase();
  const bitmap = fs.readFileSync(filePath);
  const mimeType = ext === 'svg' ? 'svg+xml' : ext;
  return `data:image/${mimeType};base64,${bitmap.toString('base64')}`;
};

const bannerPath = path.join(__dirname, '../../reports/imagenes/banner.png');
const piePath = path.join(__dirname, '../../reports/imagenes/pie.png');

// Rutas de ambos CSS
const cssConPiePath = path.join(__dirname, '../templates/css/reportes-con-pie.css');
const cssSoloHeaderPath = path.join(__dirname, '../templates/css/reportes-solo-header.css');

async function generarPDF(templateName, data, pdfOptions = {}) {
  let browser = null;

  try {
    const templatePath = path.join(__dirname, `../templates/${templateName}`);
    if (!fs.existsSync(templatePath)) {
      throw new Error(`No se encontró la plantilla en: ${templatePath}`);
    }

    const templateHtml = fs.readFileSync(templatePath, 'utf8');

    handlebars.registerHelper('primeraMayuscula', function (str) {
      if (!str) return '';
      const texto = String(str).trim();
      return texto.charAt(0).toUpperCase() + texto.slice(1);
    });

    const compiledTemplate = handlebars.compile(templateHtml);

    const bannerBase64 = imgToBase64(bannerPath);
    const pieBase64 = imgToBase64(piePath);

    const usuarioPie =
      (data && (data.usuario || data.nombreUsuario || data.user)) || 'ADMINISTRADOR';

    const fechaPie =
      (data && (data.fechaImpresion || data.fechaReporte)) ||
      new Date().toLocaleDateString('es-MX', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      });

    const htmlFinal = compiledTemplate({
      ...data,
      usuarioPie,
      fechaPie,
      bannerBase64,
      pieBase64
    });

    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(htmlFinal, { waitUntil: 'networkidle0' });

    // Detección: ¿El reporte lleva footer institucional o solo header?
    const nombreMin = templateName.toLowerCase();

    // Detecta reportes de partida y de proveedor
    const llevaPie = nombreMin.includes('partida') ||
      nombreMin.includes('proveedor') ||
      nombreMin.includes('reporteentradas');

    const archivoCss = llevaPie ? cssConPiePath : cssSoloHeaderPath;

    if (fs.existsSync(archivoCss)) {
      await page.addStyleTag({ path: archivoCss });
    }

    await page.emulateMediaType('print');

    // Esperar imágenes
    await page.evaluate(async () => {
      const imagenes = Array.from(document.images);
      await Promise.all(
        imagenes.map((imagen) => {
          if (imagen.complete) return Promise.resolve();
          return new Promise((resolve) => {
            imagen.addEventListener('load', resolve);
            imagen.addEventListener('error', resolve);
          });
        })
      );
    });

    const defaultOptions = {
      printBackground: true,
      displayHeaderFooter: false,
      margin: { top: '0px', bottom: '0px', left: '0px', right: '0px' },
      preferCSSPageSize: true,
      ...pdfOptions
    };

    const pdfBuffer = await page.pdf(defaultOptions);
    return pdfBuffer;

  } catch (error) {
    console.error(`Error al generar el PDF ${templateName}:`, error);
    throw error;
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

module.exports = {
  generarPDF
};