const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');

/**
 * Convierte una imagen local a Base64 para incorporarla directamente
 * en el HTML del reporte.
 */
const imgToBase64 = (filePath) => {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const ext = path.extname(filePath).replace('.', '').toLowerCase();
  const bitmap = fs.readFileSync(filePath);

  const mimeType = ext === 'svg'
    ? 'svg+xml'
    : ext;

  return `data:image/${mimeType};base64,${bitmap.toString('base64')}`;
};

/**
 * Rutas de imágenes institucionales.
 */
const bannerPath = path.join(
  __dirname,
  '../../reports/imagenes/banner.png'
);

const piePath = path.join(
  __dirname,
  '../../reports/imagenes/pie.png'
);

/**
 * Hoja de estilos compartida por todos los reportes.
 */
const estilosPath = path.join(
  __dirname,
  '../templates/css/reportes.css'
);

/**
 * Genera un PDF a partir de una plantilla HTML.
 *
 * Todos los reportes se generan en:
 * - Tamaño Carta
 * - Orientación Portrait
 *
 * @param {string} templateName Nombre de la plantilla HTML.
 * @param {object} data Datos enviados a Handlebars.
 * @param {object} pdfOptions Opciones particulares del reporte.
 * @returns {Promise<Buffer>}
 */
async function generarPDF(
  templateName,
  data,
  pdfOptions = {}
) {
  let browser = null;

  try {
    const templatePath = path.join(
      __dirname,
      `../templates/${templateName}`
    );

    if (!fs.existsSync(templatePath)) {
      throw new Error(
        `No se encontró la plantilla en: ${templatePath}`
      );
    }

    if (!fs.existsSync(estilosPath)) {
      throw new Error(
        `No se encontró el archivo de estilos en: ${estilosPath}`
      );
    }

    const templateHtml = fs.readFileSync(
      templatePath,
      'utf8'
    );

    const compiledTemplate = handlebars.compile(
      templateHtml
    );

    const htmlFinal = compiledTemplate({
      ...data,
      bannerBase64: imgToBase64(bannerPath),
      pieBase64: imgToBase64(piePath)
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

    await page.addStyleTag({
      path: estilosPath
    });

    /*
     * Asegura que Chromium utilice los estilos de impresión.
     */
    await page.emulateMediaType('print');

    /*
     * Espera a que las imágenes terminen de cargar.
     */
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

    const usuarioPie =
      data.usuario ||
      'ADMINISTRADOR';

    const fechaPie =
      data.fechaImpresion ||
      data.fechaReporte ||
      '';

    const defaultOptions = {
      printBackground: true,

      displayHeaderFooter: true,

      headerTemplate: '<div></div>',

      footerTemplate: `
        <div
          style="
            width: 100%;
            padding-left: 12mm;
            padding-right: 12mm;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #000;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 8pt;
          "
        >
          <div>
            <b>Usuario:</b> ${usuarioPie}
          </div>

          <div>
            <b>Fecha:</b> ${fechaPie}
          </div>

          <div>
            Pág.
            <span class="pageNumber"></span>
            de
            <span class="totalPages"></span>
          </div>
        </div>
      `,

      margin: {
        top: '12mm',
        bottom: '18mm',
        left: '12mm',
        right: '12mm'
      },

      /*
       * Permite que cada controlador personalice márgenes y otras
       * opciones no relacionadas con la orientación.
       */
      ...pdfOptions,

      /*
       * Estas propiedades deben permanecer después de ...pdfOptions.
       * Así ningún controlador puede cambiar la orientación.
       */
      width: '8.5in',
      height: '11in',
      landscape: false,
      preferCSSPageSize: false
    };

		console.log(
		  'OPCIONES FINALES DEL PDF:',
		  JSON.stringify(defaultOptions, null, 2)
		);

		const pdfBuffer = await page.pdf(defaultOptions);

    return pdfBuffer;
  } catch (error) {
    console.error(
      `Error al generar el PDF ${templateName}:`,
      error
    );

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