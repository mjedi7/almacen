const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

const imgToBase64 = (filePath) => {
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath).replace('.', '');
    const bitmap = fs.readFileSync(filePath);
    return `data:image/${ext === 'svg' ? 'svg+xml' : ext};base64,${bitmap.toString('base64')}`;
  }
  return null;
};


    const bannerPath = path.join(__dirname, '../../reports/imagenes/banner.png');
const piePath = path.join(__dirname, '../../reports/imagenes/pie.png');

async function generarPDF(templateName, data, pdfOptions = {}) {
  let browser = null;
  try {
    const templatePath = path.join(__dirname, `../templates/${templateName}`);

    if (!fs.existsSync(templatePath)) {
      throw new Error(`No se encontró la plantilla en: ${templatePath}`);
    }

    const templateHtml = fs.readFileSync(templatePath, 'utf8');
    const compiledTemplate = handlebars.compile(templateHtml);

    // Obtenemos las imágenes en base64
    const bannerBase64 = imgToBase64(bannerPath);
    const pieBase64 = imgToBase64(piePath);

    const htmlFinal = compiledTemplate({
      ...data,
      bannerBase64: bannerBase64
      // Nota: ya no es obligatorio pasar pieBase64 al HTML si lo metemos al footerTemplate
    });

    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(htmlFinal, { waitUntil: 'networkidle0' });

    const usuarioPie = data.usuario || 'ADMINISTRADOR';
    const fechaPie = data.fechaImpresion || '17/09/2026';

    const defaultOptions = {
      format: 'Letter',
      landscape: false,
      printBackground: true,
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      // METEMOS LA IMAGEN DIRECTAMENTE AQUÍ:
      footerTemplate: `
        <div style="width: 100%; box-sizing: border-box; padding: 0 10mm; font-family: Helvetica, Arial, sans-serif;">
          ${pieBase64 ? `
            <img 
              src="${pieBase64}" 
              style="width: 100%; height: auto; max-height: 28mm; display: block; margin: 0 auto 3px auto;" 
            />
          ` : ''}
          <div style="width: 100%; font-size: 8pt; color: #000; display: flex; justify-content: space-between; align-items: center;">
            <div><b>Usuario:</b> ${usuarioPie}</div>
            <div><b>Fecha:</b> ${fechaPie}</div>
            <div>Pág. <span class="pageNumber"></span> de <span class="totalPages"></span></div>
          </div>
        </div>
      `,
      margin: {
        top: '12mm',
        bottom: '48mm', // <-- Aumentamos de 18mm a 28mm para que quepa la imagen + el texto holgadamente o 12mm
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