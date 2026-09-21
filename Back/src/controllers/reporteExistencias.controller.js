const { Pool } = require('pg');
const { generarPDF } = require('../services/pdfGenerator');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: process.env.PORT_BD
});

const generarReporteExistencias = async (req, res) => {
  try {
    const { centro_trabajo, partida, fecha, filtroExistencia = 'todas', usuario } = req.body;
    const idPlantel = parseInt(centro_trabajo, 10) || 0;

    let condicionExistencia = '';
    if (filtroExistencia === 'con_existencia') {
      condicionExistencia = 'AND al.existencias > 0';
    } else if (filtroExistencia === 'sin_existencia') {
      condicionExistencia = 'AND al.existencias = 0';
    }

    const params = [idPlantel];
    let condicionPartida = '';
    if (partida && partida !== '0') {
      params.push(partida.toString().trim());
      condicionPartida = `AND pa.clave = $${params.length}`;
    }

    const query = `
      SELECT 
        pa.clave || '-' || DATE_PART('year', fecha_adquisicion) || '-' || ca.clave AS "clave_partida", 
        pa.descripcion AS "partida_desc",
        pa.clave AS "partida_clave",
        LOWER(ca.descripcion) AS "nombre_producto", 
        COALESCE(al.existencias, 0) AS "existencias",
        (co.precio_unitario * 1.16) AS "costo_unitario", 
        (COALESCE(al.existencias, 0) * (co.precio_unitario * 1.16)) AS "costo_total"
      FROM almacen al 
        INNER JOIN costos co ON (al.id_costos = co.id)
        INNER JOIN cat_articulos ca ON (co.id_articulo = ca.id)
        INNER JOIN cat_partidas pa ON (ca.id_partidas = pa.id)
      WHERE al.id_centrotrabajo = $1
        ${condicionExistencia}
        ${condicionPartida}
      ORDER BY pa.clave ASC, ca.clave ASC
    `;

    const { rows } = await pool.query(query, params);

    let granTotal = 0;
    let existenciasTotales = 0;
    const gruposMap = new Map();

    for (const item of rows) {
      const exist = Number(item.existencias || 0);
      const costoUni = Number(item.costo_unitario || 0);
      const costoTot = Number(item.costo_total || 0);

      granTotal += costoTot;
      existenciasTotales += exist;

      const claveP = item.partida_clave;
      if (!gruposMap.has(claveP)) {
        gruposMap.set(claveP, {
          clave: claveP,
          descripcion: item.partida_desc,
          articulos: []
        });
      }

      gruposMap.get(claveP).articulos.push({
        clave: item.clave_partida,
        articulo: item.nombre_producto,
        costo: costoUni.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        existencia: exist.toLocaleString('es-MX'), // Formato limpio de enteros
        costo_total: costoTot.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      });
    }

    // Validación segura de la fecha
    let fechaTexto = fecha;
    if (!fechaTexto || typeof fechaTexto !== 'string' || fechaTexto.includes('Invalid')) {
      const hoy = new Date();
      const dd = String(hoy.getDate()).padStart(2, '0');
      const mm = String(hoy.getMonth() + 1).padStart(2, '0');
      const yyyy = hoy.getFullYear();
      fechaTexto = `${dd}/${mm}/${yyyy}`;
    }
    const templateData = {
      tituloAlmacen: 'Almacén General',
      gruposPartidas: Array.from(gruposMap.values()),
      totalRegistrosImpresos: rows.length.toLocaleString('es-MX'),
      existenciasTotales: existenciasTotales.toLocaleString('es-MX'),
      granTotal: granTotal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      usuario: usuario || 'ADMINISTRADOR',
      fechaImpresion: fechaTexto,
      esGeneral: (partida === '0' || !partida) // true si son todas las partidas
    };

    // Generación del buffer vertical
    const pdfBuffer = await generarPDF('reporteExistencias.html', templateData, { landscape: false });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', pdfBuffer.length);
    res.send(pdfBuffer);

  } catch (error) {
    console.error('Error generando reporte de existencias:', error);
    res.status(500).json({ error: 'Error al generar el reporte de existencias' });
  }
};

module.exports = { generarReporteExistencias };