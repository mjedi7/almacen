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
    console.log("=== RUTA DE LA PLANTILLA ===", templatePath);
    console.log("=== ¿TIENE CENEFA EL HTML? ===", templateHtml.includes("cenefa-contenedor") || templateHtml.includes("institutional-footer"));


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

    // Detección del tipo de reporte
    const nombreMin = templateName.toLowerCase().trim();

    const esSoloHeader =
      nombreMin.includes('existencia') ||
      nombreMin.includes('costo') ||
      nombreMin.includes('todas') ||
      nombreMin.includes('salida');

      // 1. INYECCIÓN ESTRICTA: 'partida' NUNCA debe cargar reportes-con-pie.css
    if (esSoloHeader && fs.existsSync(cssSoloHeaderPath)) {
      await page.addStyleTag({ path: cssSoloHeaderPath });
    } else if (nombreMin.includes('kardex') && fs.existsSync(cssConPiePath)) {
      await page.addStyleTag({ path: cssConPiePath });
    }
    // Si es reporteEntradasPartida, NO entra aquí y no carga ningún CSS externo.

    // Compras por partida es autónomo: NO debe cargar estilos externos con position:fixed
    const usaCssExterno = esSoloHeader
      ? cssSoloHeaderPath
      : nombreMin.includes('kardex')
      ? cssConPiePath
      : null;

    if (usaCssExterno && fs.existsSync(usaCssExterno)) {
      await page.addStyleTag({ path: usaCssExterno });
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

   // Plantilla HTML del pie nativo de Puppeteer con tamaño imponente y ancho total
   
    const footerHtmlTemplate = `
      <div style="font-size: 7.5pt; font-family: Arial, sans-serif; width: 100%; text-align: center; margin: 0; padding: 0;">
        ${pieBase64 ? `<img src="${pieBase64}" style="height: 22mm; width: auto; max-width: 95vw; display: block; margin: 0 auto 2px auto;" />` : ''}
        <div style="font-weight: bold; margin-bottom: 1px; color: #000;">
          Carrillo Puerto #21, Col. Centro C.P 91000 Xalapa, Veracruz. Tel. (228) 8421600
        </div>
        <div style="color: #000;">
          www.cecytev.edu.mx — POR AMOR A VERACRUZ
        </div>
      </div>
    `;

    // Opciones definitivas de Puppeteer para forzar el footer en grande en todas partes
    const defaultOptions = {
      format: 'Letter',
      printBackground: true,
      displayHeaderFooter: false, // <--- Activado por decreto para que muestre el footer en todos los reportes
      headerTemplate: '<span></span>',
      footerTemplate: footerHtmlTemplate, // <--- Nuestra cenefa grande en Base64
      margin: {
        top: '12mm',
        bottom: '32mm', // <--- Margen reservado abajo para que la cenefa grandota quepa con holgura
        left: '12mm',
        right: '12mm'
      },
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