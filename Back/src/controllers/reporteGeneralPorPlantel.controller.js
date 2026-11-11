const { Pool } = require('pg');
const { generarPDF } = require('../services/pdfGenerator');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: Number(process.env.PORT_BD || 5432),
});

const ReporteGeneralPorPlantel = async (req, res) => {
  const idPlantel = parseInt(req.params.idPlantel);

  if (!idPlantel) {
    return res.status(400).json({ message: 'El ID del plantel es obligatorio y debe ser numérico' });
  }

  try {
    // 1. Datos del plantel
    const plantelResult = await pool.query(
      'SELECT descripcion, administrativo FROM centro_trabajo WHERE id = $1',
      [idPlantel]
    );
    const plantel = (plantelResult.rows && plantelResult.rows[0]) || { descripcion: 'PLANTEL NO ESPECIFICADO' };

    // 2. Existencias
    const articulosResult = await pool.query(
      `SELECT existencias, LOWER(nombre_producto) AS nombre_producto 
       FROM almacen 
       WHERE id_centrotrabajo = $1 
       ORDER BY nombre_producto ASC`,
      [idPlantel]
    );

    const filas = articulosResult.rows || articulosResult;
    const articulos = filas.map(item => ({
      existencias: item.existencias,
      nombre_producto: item.nombre_producto 
        ? item.nombre_producto.charAt(0).toUpperCase() + item.nombre_producto.slice(1) 
        : ''
    }));

    // 3. Datos para la plantilla
    const datosPlantilla = {
      plantel,
      articulos
    };

    // 4. Generación centralizada con pdfGenerator
    const pdfBuffer = await generarPDF(
      'reporteGeneralPorPlantel.html',
      datosPlantilla,
      {
        tipoDiseno: 'solo-header',
        estamparCenefa: false
      }
    );

    // 5. Servir PDF al navegador
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="ReporteGeneralPorPlantel.pdf"',
      'Content-Length': pdfBuffer.length
    });

    return res.send(pdfBuffer);

  } catch (error) {
    console.error('Error generando ReporteGeneralPorPlantel:', error);
    return res.status(500).json({ message: 'Error interno al generar el reporte PDF' });
  }
};

module.exports = {
  ReporteGeneralPorPlantel
};