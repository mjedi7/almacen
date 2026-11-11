const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

// Convierte imágenes a Base64 para incrustación directa
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

// Función que busca el archivo CSS en rutas alternativas para evitar fallos de lectura
const buscarRutaCss = (nombreCss) => {
  const rutasPosibles = [
    path.join(__dirname, `../templates/css/${nombreCss}`),
    path.join(__dirname, `../../templates/css/${nombreCss}`),
    path.join(__dirname, `../reports/css/${nombreCss}`),
    path.join(process.cwd(), `templates/css/${nombreCss}`),
    path.join(process.cwd(), `src/templates/css/${nombreCss}`)
  ];
  return rutasPosibles.find((ruta) => fs.existsSync(ruta)) || null;
};

async function generarPDF(templateName, data, pdfOptions = {}) {
  let browser = null;

  try {
    const nombreArchivo = templateName.endsWith('.html') ? templateName : `${templateName}.html`;
    const templatePath = path.join(__dirname, `../templates/${nombreArchivo}`);

    if (!fs.existsSync(templatePath)) {
      throw new Error(`No se encontró la plantilla en: ${templatePath}`);
    }

    const templateHtml = fs.readFileSync(templatePath, 'utf8');

    // Helper Handlebars: Primera letra en mayúscula
    handlebars.registerHelper('primeraMayuscula', function (str) {
      if (!str) return '';
      const texto = String(str).trim();
      return texto.charAt(0).toUpperCase() + texto.slice(1);
    });

    const compiledTemplate = handlebars.compile(templateHtml);
    const bannerBase64 = imgToBase64(bannerPath);

    // Datos de auditoría para el pie
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
      pieBase64: null // Se maneja vía pdf-lib para evitar desfasamiento
    });

    // ========================================================
    // 1. DETECCIÓN Y CLASIFICACIÓN DE REPORTES
    // ========================================================
    const nombreMin = templateName.toLowerCase().trim();

    let disenoDetectado = 'con-pie';
    let requiereCenefa = true;

    // 1. Reportes con firmas institucionales
    if (nombreMin.includes('listasurtido') || nombreMin.includes('surtido')) {
      disenoDetectado = 'con-firmas';
      requiereCenefa = true;
    }
    // 2. Reportes de solo encabezado (barra auditoría y SIN cenefa)
    else if (
      nombreMin.includes('plantel') ||
      (nombreMin.includes('salida') && !nombreMin.includes('partida'))
    ) {
      disenoDetectado = 'solo-header';
      requiereCenefa = false;
    }
    // 3. Reportes estándar con cenefa al pie (partidas, entradas todas, kardex, proveedor)
    else {
      disenoDetectado = 'con-pie';
      requiereCenefa = true;
    }

    // Opciones pasadas desde el controlador tienen prioridad absoluta
    const {
      tipoDiseno = disenoDetectado, // 'con-firmas' | 'con-pie' | 'solo-header'
      estamparCenefa = requiereCenefa,
      ...opcionesPuppeteer
    } = pdfOptions;

    // ========================================================
    // 2. LECTURA E INYECCIÓN FÍSICA DEL CSS EN EL HTML
    // ========================================================
    let nombreArchivoCss = 'reportes-con-pie.css';
    if (tipoDiseno === 'con-firmas') {
      nombreArchivoCss = 'reportes-con-firmas.css';
    } else if (tipoDiseno === 'solo-header') {
      nombreArchivoCss = 'reportes-solo-header.css';
    }

    const rutaCssReal = buscarRutaCss(nombreArchivoCss);
    let cssAInyectar = '';

    if (rutaCssReal) {
      console.log(`>>> [PDF-GEN] CSS cargado (${tipoDiseno}):`, rutaCssReal);
      cssAInyectar = fs.readFileSync(rutaCssReal, 'utf8');
    } else {
      console.warn(`>>> [PDF-GEN ALERTA] No se encontró el archivo CSS: ${nombreArchivoCss}`);
    }

    // Se incrusta el CSS antes de pasarlo a Puppeteer para garantizar aplicación síncrona
    let htmlParaRender = htmlFinal;
    if (cssAInyectar) {
      htmlParaRender = htmlFinal.replace(
        '</head>',
        `<style>\n${cssAInyectar}\n</style>\n</head>`
      );
    }

    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    
    // Contenido listo con sus estilos incrustados
    await page.setContent(htmlParaRender, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('print');

    // Esperar imágenes antes de la captura
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

    // ========================================================
    // 3. PIE DE AUDITORÍA PARA SOLO-HEADER
    // ========================================================
    const footerSoloHeader = `
      <div style="width: 100%; font-family: Arial, sans-serif; font-size: 7.5pt; color: #000; padding: 0 14mm; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box;">
        <div>
          <strong>Usuario:</strong> ${usuarioPie} &nbsp;&nbsp;&nbsp;&nbsp; <strong>Fecha:</strong> ${fechaPie}
        </div>
        <div>
          Pág. &nbsp; <span class="pageNumber"></span>
        </div>
      </div>
    `;

    const defaultOptions = {
      format: 'Letter',
      printBackground: true,
      displayHeaderFooter: tipoDiseno === 'solo-header',
      headerTemplate: '<div></div>',
      footerTemplate: tipoDiseno === 'solo-header' ? footerSoloHeader : '<div></div>',
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
    // 4. ESTAMPADO DE CENEFA AL PIE CON PDF-LIB
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