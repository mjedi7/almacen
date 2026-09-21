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

// Archivo de estilos para reportes
const estilosPath = path.join( __dirname, '../templates/css/reportes.css');

async function generarPDF(templateName, data, pdfOptions = {}) {
  let browser = null;
  try {
    const templatePath = path.join(__dirname, `../templates/${templateName}`);
    if (!fs.existsSync(templatePath)) {
      throw new Error(`No se encontró la plantilla en: ${templatePath}`);
    }

    const templateHtml = fs.readFileSync(templatePath, 'utf8');
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
    
	// En caso de que no se encuentre el CSS
	if (!fs.existsSync(estilosPath)) {
	  throw new Error(`No se encontró el archivo de estilos en: ${estilosPath}`);
	}

	await page.addStyleTag({ path: estilosPath });    

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