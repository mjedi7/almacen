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

    // 1. Detección unificada: salidas, existencia, costo y todas usan reporte-solo-header
    const nombreMin = templateName.toLowerCase().trim();

    const esSoloHeader = nombreMin.includes('existencia') || 
                         nombreMin.includes('costo') || 
                         nombreMin.includes('todas') ||
                         nombreMin.includes('salida'); // <-- AÑADIDO: ahora entra aquí

    const llevaPie = !esSoloHeader && (
      nombreMin.includes('partida') ||
      nombreMin.includes('proveedor') ||
      nombreMin.includes('reporteentradas') ||
      nombreMin.includes('kardex')
    );

    // 2. Inyección de CSS según el tipo de reporte
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

    // 3. Opciones de PDF armonizadas
    const defaultOptions = {
      printBackground: true,
      displayHeaderFooter: esSoloHeader,
      headerTemplate: '<span></span>',
      footerTemplate: `
        <div style="
          width: 100%;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 7pt;
          color: #000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-left: 14mm;
          padding-right: 14mm;
          box-sizing: border-box;
        ">
          <div>
            <strong>Usuario:</strong> ${usuarioPie}
          </div>
          <div>
            Pág. <span class="pageNumber"></span>
          </div>
        </div>
      `,
      margin: esSoloHeader
        ? { top: '12mm', bottom: '22mm', left: '0px', right: '0px' }
        : { top: '0px', bottom: '0px', left: '0px', right: '0px' },
      preferCSSPageSize: !esSoloHeader,
      ...pdfOptions
    };

    console.log('--- GENERANDO PDF ---');
    console.log('Plantilla recibida:', templateName);
    console.log('Ruta completa HTML:', templatePath);
    console.log('CSS que se cargará:', archivoCss);
    console.log('¿Es solo header?:', esSoloHeader);

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