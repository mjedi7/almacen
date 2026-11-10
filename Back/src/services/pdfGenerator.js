const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

const imgToBase64 = (filePath) => {
  if (!fs.existsSync(filePath)) return null;
  const ext = path.extname(filePath).replace('.', '').toLowerCase();
  const bitmap = fs.readFileSync(filePath);
  const mimeType = ext === 'svg' ? 'svg+xml' : ext;
  return `data:image/${mimeType};base64,${bitmap.toString('base64')}`;
};

const bannerPath = path.join(__dirname, '../../reports/imagenes/banner.png');
const piePath = path.join(__dirname, '../../reports/imagenes/pie.png');

const cssConPiePath = path.join(__dirname, '../templates/css/reportes-con-pie.css');
const cssSoloHeaderPath = path.join(__dirname, '../templates/css/reportes-solo-header.css');

async function generarPDF(templateName, data, pdfOptions = {}) {
  let browser = null;

  try {
    const nombreArchivo = templateName.endsWith('.html') ? templateName : `${templateName}.html`;
    const templatePath = path.join(__dirname, `../templates/${nombreArchivo}`);

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
      pieBase64: null // No inyectamos en HTML para evitar duplicados o desfases
    });

    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(htmlFinal, { waitUntil: 'networkidle0' });

    // Detección de reportes
    const nombreMin = templateName.toLowerCase().trim();

    const esReporteConPie =
      nombreMin.includes('partida') ||
      nombreMin.includes('proveedor') ||
      nombreMin.includes('kardex');

    const esSoloHeader =
      nombreMin.includes('existencia') ||
      nombreMin.includes('costo') ||
      nombreMin.includes('todas') ||
      nombreMin.includes('salida');

    // Inyección de CSS correspondiente
    if (esReporteConPie && fs.existsSync(cssConPiePath)) {
      await page.addStyleTag({ path: cssConPiePath });
    } else if (esSoloHeader && fs.existsSync(cssSoloHeaderPath)) {
      await page.addStyleTag({ path: cssSoloHeaderPath });
    }

    await page.emulateMediaType('print');

    // Esperar imágenes antes de imprimir
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
      format: 'Letter',
      printBackground: true,
      displayHeaderFooter: false,
      preferCSSPageSize: true,
      margin: {
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px'
      },
      ...pdfOptions
    };

    let pdfBuffer = await page.pdf(defaultOptions);

    // Estampado de cenefa con pdf-lib solo en la última página
    if (esReporteConPie && fs.existsSync(piePath)) {
      const pdfDoc = await PDFDocument.load(pdfBuffer);
      const paginas = pdfDoc.getPages();
      const ultimaPagina = paginas[paginas.length - 1];

      const imagenBytes = fs.readFileSync(piePath);
      const imagenEmbed = piePath.toLowerCase().endsWith('.png')
        ? await pdfDoc.embedPng(imagenBytes)
        : await pdfDoc.embedJpg(imagenBytes);

      const { width } = ultimaPagina.getSize();

      const anchoDeseado = width * 0.92;
      const escala = anchoDeseado / imagenEmbed.width;
      const altoCalculado = imagenEmbed.height * escala;

      const posX = (width - anchoDeseado) / 2;
      const posY = 18; // 18pt (~6mm) del margen inferior físico

      ultimaPagina.drawImage(imagenEmbed, {
        x: posX,
        y: posY,
        width: anchoDeseado,
        height: altoCalculado
      });

      pdfBuffer = Buffer.from(await pdfDoc.save());
    }

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