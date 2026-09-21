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

    console.log('>>> [PDF RUTA DISCO]:', templatePath); // <-- Ver ruta real

    if (!fs.existsSync(templatePath)) {
      throw new Error(`No se encontró la plantilla en: ${templatePath}`);
    }

    const templateHtml = fs.readFileSync(templatePath, 'utf8');
    console.log('>>> [PDF CONTENIDO]:', templateHtml.includes('KÁRDEX - PRUEBA') ? 'SÍ TIENE EL CAMBIO' : 'NO TIENE EL CAMBIO'); // <-- Ver si tiene el cambio
    
    const compiledTemplate = handlebars.compile(templateHtml);

    const htmlFinal = compiledTemplate({
      ...data,
      bannerBase64: imgToBase64(bannerPath),
      pieBase64: imgToBase64(piePath)
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
      footerTemplate: `
        <div style="width: 100%; font-size: 8pt; font-family: Helvetica, Arial, sans-serif; color: #000; display: flex; justify-content: space-between; align-items: center; padding-left: 14mm; padding-right: 14mm; box-sizing: border-box;">
          <div><b>Usuario:</b> ${usuarioPie}</div>
          <div><b>Fecha:</b> ${fechaPie}</div>
          <div>Pág. <span class="pageNumber"></span> de <span class="totalPages"></span></div>
        </div>
      `,
      margin: {
        top: '12mm',
        bottom: '18mm',
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