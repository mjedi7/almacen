const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const path = require('path');
const fs = require('fs');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib');

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

// Función que busca el archivo CSS en rutas alternativas
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

// Extractor robusto de nombre de usuario para auditoría
const resolverUsuarioAuditoria = (data, pdfOptions) => {
  const candidato =
    pdfOptions?.usuario ||
    pdfOptions?.usuarioPie ||
    data?.usuarioPie ||
    data?.nombreUsuario ||
    data?.user ||
    (typeof data?.usuario === 'string' ? data.usuario : data?.usuario?.nombre || data?.usuario?.username) ||
    data?.nombre ||
    '';

  const textoLimpio = String(candidato).trim();
  return textoLimpio.length > 0 ? textoLimpio : 'ADMINISTRADOR';
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
    const usuarioPie = resolverUsuarioAuditoria(data, pdfOptions);

    const fechaPie =
      (data && (data.fechaImpresion || data.fechaReporte)) ||
      pdfOptions?.fechaPie ||
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
      pieBase64: null // Se estampa vía pdf-lib
    });

    // ========================================================
    // 1. CLASIFICACIÓN DE REPORTES
    // ========================================================
    const nombreMin = templateName.toLowerCase().trim();

    let disenoDetectado = 'con-pie';
    if (nombreMin.includes('listasurtido') || nombreMin.includes('surtido')) {
      disenoDetectado = 'con-firmas';
    }

    let tipoDisenoSolicitado = pdfOptions.tipoDiseno || disenoDetectado;
    if (tipoDisenoSolicitado === 'solo-header') {
      tipoDisenoSolicitado = 'con-pie';
    }

    const {
      estamparCenefa = true,
      mostrarAuditoria = true,
      tipoDiseno: _ignorarTipo,
      usuario: _usuarioOpcion,
      usuarioPie: _usuarioPieOpcion,
      fechaPie: _fechaPieOpcion,
      ...opcionesPuppeteer
    } = pdfOptions;

    const tipoDiseno = tipoDisenoSolicitado;

    // ========================================================
    // 2. LECTURA E INYECCIÓN FÍSICA DEL CSS EN EL HTML
    // ========================================================
    const nombreArchivoCss =
      tipoDiseno === 'con-firmas' ? 'reportes-con-firmas.css' : 'reportes-con-pie.css';

    const rutaCssReal = buscarRutaCss(nombreArchivoCss);
    let cssAInyectar = '';

    if (rutaCssReal) {
      console.log(`>>> [PDF-GEN] CSS cargado (${tipoDiseno}):`, rutaCssReal);
      cssAInyectar = fs.readFileSync(rutaCssReal, 'utf8');
    } else {
      console.warn(`>>> [PDF-GEN ALERTA] No se encontró el archivo CSS: ${nombreArchivoCss}`);
    }

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
    await page.setContent(htmlParaRender, { waitUntil: 'networkidle0' });
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

    // ========================================================
    // 3. BARRA INFERIOR DE AUDITORÍA PARA PÁGINAS INTERMEDIAS
    // ========================================================
    const footerAuditoria = `
      <div style="width: 100%; font-family: Arial, sans-serif; font-size:7pt; color: #000; padding: 0 14mm 4mm 14mm; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box;">
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
      displayHeaderFooter: mostrarAuditoria,
      headerTemplate: '<div></div>',
      footerTemplate: mostrarAuditoria ? footerAuditoria : '<div></div>',
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
    // 4. ESTAMPADO DE CENEFA + PIE DE AUDITORÍA EN ÚLTIMA HOJA
    // ========================================================
    if (estamparCenefa && fs.existsSync(piePath)) {
      const pdfDoc = await PDFDocument.load(pdfBuffer);
      const paginas = pdfDoc.getPages();
      const totalPaginas = paginas.length;
      const ultimaPagina = paginas[totalPaginas - 1];

      const imagenBytes = fs.readFileSync(piePath);
      const imagenEmbed = piePath.toLowerCase().endsWith('.png')
        ? await pdfDoc.embedPng(imagenBytes)
        : await pdfDoc.embedJpg(imagenBytes);

      const { width } = ultimaPagina.getSize();

      const anchoDeseado = width * 0.92;
      const escala = anchoDeseado / imagenEmbed.width;
      const altoCalculado = imagenEmbed.height * escala;

      const posX = (width - anchoDeseado) / 2;
      // Elevamos la cenefa a Y=30 para dejar libre la franja inferior de auditoría
      const posY = 30;

      // 1. Estampar cenefa gráfica solo en la última hoja
      ultimaPagina.drawImage(imagenEmbed, {
        x: posX,
        y: posY,
        width: anchoDeseado,
        height: altoCalculado
      });

      // 2. Redibujar encima la línea de Usuario, Fecha y Paginación para que nunca quede tapada
      if (mostrarAuditoria) {
        const fontNormal = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
        const fontSize = 9;
        const margenLateral = 40; // ~14mm igual que en Puppeteer
        const yTexto = 14;

        // "Usuario: " en negrita + nombre en normal
        const etiquetaUsuario = 'Usuario: ';
        ultimaPagina.drawText(etiquetaUsuario, {
          x: margenLateral,
          y: yTexto,
          size: fontSize,
          font: fontBold,
          color: rgb(0, 0, 0)
        });

        const anchoEtiquetaUsuario = fontBold.widthOfTextAtSize(etiquetaUsuario, fontSize);
        ultimaPagina.drawText(usuarioPie, {
          x: margenLateral + anchoEtiquetaUsuario,
          y: yTexto,
          size: fontSize,
          font: fontNormal,
          color: rgb(0, 0, 0)
        });

        // "Fecha: " en negrita + fecha en normal
        const anchoValorUsuario = fontNormal.widthOfTextAtSize(usuarioPie, fontSize);
        const xFecha = margenLateral + anchoEtiquetaUsuario + anchoValorUsuario + 22;
        const etiquetaFecha = 'Fecha: ';

        ultimaPagina.drawText(etiquetaFecha, {
          x: xFecha,
          y: yTexto,
          size: fontSize,
          font: fontBold,
          color: rgb(0, 0, 0)
        });

        const anchoEtiquetaFecha = fontBold.widthOfTextAtSize(etiquetaFecha, fontSize);
        ultimaPagina.drawText(fechaPie, {
          x: xFecha + anchoEtiquetaFecha,
          y: yTexto,
          size: fontSize,
          font: fontNormal,
          color: rgb(0, 0, 0)
        });

        // Paginación alineada a la derecha ("Pág. X")
        const textoPagina = `Pág.  ${totalPaginas}`;
        const anchoPagina = fontNormal.widthOfTextAtSize(textoPagina, fontSize);
        ultimaPagina.drawText(textoPagina, {
          x: width - margenLateral - anchoPagina,
          y: yTexto,
          size: fontSize,
          font: fontNormal,
          color: rgb(0, 0, 0)
        });
      }

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