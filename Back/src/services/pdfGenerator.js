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

// Rutas a imágenes institucionales
const bannerPath = path.join(__dirname, '../../reports/imagenes/banner.png');
const piePath = path.join(__dirname, '../../reports/imagenes/pie.png');

// Rutas a las hojas de estilo desacopladas
const cssConPiePath = path.join(__dirname, '../templates/css/reportes-con-pie.css');
const cssConFirmasPath = path.join(__dirname, '../templates/css/reportes-con-firmas.css');
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
      pieBase64: null // No se inyecta en el HTML para evitar desfasamiento visual
    });

    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(htmlFinal, { waitUntil: 'networkidle0' });

    // ========================================================
    // DETECCIÓN Y CLASIFICACIÓN DE REPORTES
    // ========================================================
    const nombreMin = templateName.toLowerCase().trim();

    let disenoDetectado = 'con-pie';
    let requiereCenefa = true;

    // 1. Reportes con firmas institucionales
    if (nombreMin.includes('listasurtido') || nombreMin.includes('surtido')) {
      disenoDetectado = 'con-firmas';
      requiereCenefa = true;
    }
    // 2. Reportes de solo encabezado (sin cenefa)
    else if (
      nombreMin.includes('plantel') ||
      nombreMin.includes('general') ||
      nombreMin.includes('existencia') ||
      nombreMin.includes('costo') ||
      nombreMin.includes('todas') ||
      (nombreMin.includes('salida') && !nombreMin.includes('partida'))
    ) {
      disenoDetectado = 'solo-header';
      requiereCenefa = false;
    }
    // 3. Reportes estándar con cenefa al pie
    else {
      disenoDetectado = 'con-pie';
      requiereCenefa = true;
    }

    // Si el controlador envió opciones explícitas, tienen prioridad
    const {
      tipoDiseno = disenoDetectado, // 'con-firmas' | 'con-pie' | 'solo-header'
      estamparCenefa = requiereCenefa,
      ...opcionesPuppeteer
    } = pdfOptions;

    await page.emulateMediaType('print');

    // Esperar carga completa de imágenes
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
      ...opcionesPuppeteer
    };

    let pdfBuffer = await page.pdf(defaultOptions);

    // ========================================================
    // ESTAMPADO DE CENEFA AL PIE DE LA ÚLTIMA HOJA (pdf-lib)
    // ========================================================
    if (estamparCenefa && fs.existsSync(piePath)) {
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
      const posY = 18;

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