const path = require('path');
const fs = require('fs');
const archiver = require('archiver');

const descargarzip = async (req, res) => {
  try {
    console.log('Solicitud recibida para descargar ZIP');

    // OJO con la ruta: __dirname apunta a /src/controllers.
    // Si la carpeta "reportes" se crea en la raíz del proyecto Back, usa path.join(__dirname, '../../reportes') o '../reportes'.
    // Si se crea en src/controllers/reportes, déjala así:
    let carpetaPDFs = path.join(__dirname, 'reportes');

    if (!fs.existsSync(carpetaPDFs)) {
      // Búsqueda alternativa si se guardó en la raíz de Back/
      const rutaAlternativa = path.join(__dirname, '../reportes');
      if (fs.existsSync(rutaAlternativa)) {
        carpetaPDFs = rutaAlternativa;
      } else {
        return res.status(404).json({ error: 'La carpeta de reportes no existe' });
      }
    }

    const archivos = fs.readdirSync(carpetaPDFs)
      .filter(file => file.toLowerCase().endsWith('.pdf'));

    if (archivos.length === 0) {
      return res.status(404).json({ error: 'No hay archivos PDF para comprimir' });
    }

    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename=archivos_pdf.zip');

    const archive = archiver('zip', {
      zlib: { level: 9 }
    });

    archive.on('error', (err) => {
      throw err;
    });

    archive.pipe(res);

    // Agregar cada PDF al ZIP
    archivos.forEach(file => {
      const rutaCompleta = path.join(carpetaPDFs, file);
      archive.file(rutaCompleta, { name: file });
    });

    await archive.finalize();
    console.log('ZIP generado y transmitido');

    // Limpieza de archivos temporales tras completar la descarga
    setTimeout(() => {
      fs.rm(carpetaPDFs, { recursive: true, force: true }, (err) => {
        if (err) {
          console.error('Error eliminando carpeta temporal:', err);
        } else {
          console.log('Carpeta temporal eliminada correctamente');
        }
      });
    }, 2000);

  } catch (error) {
    console.error('Error generando ZIP:', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Error generando ZIP' });
    }
  }
};

module.exports = {
  descargarzip
};