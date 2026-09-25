const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

/**
 * Convierte una imagen local a Base64 para incorporarla directamente
 * en el HTML o en las opciones del reporte.
 */
const imgToBase64 = (filePath) => {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const ext = path.extname(filePath).replace('.', '').toLowerCase();
  const bitmap = fs.readFileSync(filePath);
  const mimeType = ext === 'svg' ? 'svg+xml' : ext;

  return `data:image/${mimeType};base64,${bitmap.toString('base64')}`;
};

const bannerPath = path.join(__dirname, '../../reports/imagenes/banner.png');
const piePath = path.join(__dirname, '../../reports/imagenes/pie.png');

/**
 * Hoja de estilos compartida para otros reportes.
 */
const estilosPath = path.join(__dirname, '../templates/css/reportes.css');

async function generarPDF(templateName, data, pdfOptions = {}) {
  let browser = null;

  try {
    const templatePath = path.join(__dirname, `../templates/${templateName}`);

    if (!fs.existsSync(templatePath)) {
      throw new Error(`No se encontró la plantilla en: ${templatePath}`);
    }

    const templateHtml = fs.readFileSync(templatePath, 'utf8');
    const compiledTemplate = handlebars.compile(templateHtml);

    // Conversión de recursos estáticos a Base64
    const bannerBase64 = imgToBase64(bannerPath);
    const pieBase64 = imgToBase64(piePath);

    const usuarioPie =
      (data && (data.usuario || data.nombreUsuario || data.user)) ||
      'ADMINISTRADOR';

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
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox'
      ]
    });

    const page = await browser.newPage();

    await page.setContent(htmlFinal, {
      waitUntil: 'networkidle0'
    });

    // Inyecta el CSS externo solo si se solicita de forma explícita
    if (pdfOptions.usarEstilosCompartidos && fs.existsSync(estilosPath)) {
      await page.addStyleTag({
        path: estilosPath
      });
    }

    // Forzar renderizado en modo impresión
    await page.emulateMediaType('print');

    // Esperar a que las imágenes terminen de cargar completamente
    await page.evaluate(async () => {
      const imagenes = Array.from(document.images);

      await Promise.all(
        imagenes.map((imagen) => {
          if (imagen.complete) {
            return Promise.resolve();
          }

          return new Promise((resolve) => {
            imagen.addEventListener('load', resolve);
            imagen.addEventListener('error', resolve);
          });
        })
      );
    });

    const defaultOptions = {
      printBackground: true,
      displayHeaderFooter: false, // Desactivado para que use el del HTML sin conflictos
      ...pdfOptions,
      margin: {
        top: '12mm',
        bottom: '30mm', // Espacio suficiente para la imagen y los textos
        left: '0px',
        right: '0px'
      },
      width: '8.5in',
      height: '11in',
      preferCSSPageSize: false
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