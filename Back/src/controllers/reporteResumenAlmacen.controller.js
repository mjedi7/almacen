const { Pool } = require('pg');
const { generarPDF } = require('../services/pdfGenerator');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: process.env.PORT_BD
});

const formatearFecha = (fecha) => {
  if (!fecha) return '';
  const [anio, mes, dia] = fecha.split('-');
  return `${dia}-${mes}-${anio}`;
};

const formatearMoneda = (valor) => {
  return Number(valor || 0).toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

const validarFechas = (fechaIni, fechaFin, fechaReporte) => {
  if (!fechaIni || !fechaFin || !fechaReporte) {
    return 'Las fechas inicial, final y de reporte son obligatorias';
  }
  const formatoFecha = /^\d{4}-\d{2}-\d{2}$/;
  if (!formatoFecha.test(fechaIni) || !formatoFecha.test(fechaFin) || !formatoFecha.test(fechaReporte)) {
    return 'Las fechas deben tener el formato YYYY-MM-DD';
  }
  if (fechaIni > fechaFin) {
    return 'La fecha inicial no puede ser posterior a la fecha final';
  }
  return null;
};

/**
 * Genera el reporte dinámico de Resumen de Almacén (Año Actual y Año Anterior).
 * Ruta POST /reporte_resumen_almacen
 */
const generarReporteResumenAlmacen = async (req, res) => {
  try {
    const { fechaIni, fechaFin, fechaReporte, usuario } = req.body;

    const errorValidacion = validarFechas(fechaIni, fechaFin, fechaReporte);
    if (errorValidacion) {
      return res.status(400).json({ error: errorValidacion });
    }

    // EXTRAER DINÁMICAMENTE LOS AÑOS A PARTIR DE LA FECHA FIN (o fechaIni)
    const anioActual = parseInt(fechaFin.split('-')[0], 10);
    const anioAnterior = anioActual - 1;

    // Consulta SQL dinámica usando los años calculados
    const consulta = `
      SELECT 
        cp.clave AS "noPartida",
        cp.descripcion AS "partida",
        
        -- Saldo inicial Año Anterior (movimientos anteriores a fechaIni del anioAnterior)
        COALESCE(SUM(CASE WHEN EXTRACT(YEAR FROM m.fecha::date) = $3 AND m.fecha::date < $1::date THEN (COALESCE(m.num_articulos_solicitados, 0) * COALESCE(c.precio_unitario, 0)) ELSE 0 END), 0) AS "saldoInicialAnterior",
        
        -- Saldo inicial Año Actual (movimientos anteriores a fechaIni del anioActual)
        COALESCE(SUM(CASE WHEN EXTRACT(YEAR FROM m.fecha::date) = $4 AND m.fecha::date < $1::date THEN (COALESCE(m.num_articulos_solicitados, 0) * COALESCE(c.precio_unitario, 0)) ELSE 0 END), 0) AS "saldoInicialActual",
        
        -- Entradas del periodo en el Año Actual
        COALESCE(SUM(CASE WHEN m.tipo = 'ENTRADA' AND m.fecha::date BETWEEN $1::date AND $2::date THEN (COALESCE(m.num_articulos_solicitados, 0) * COALESCE(c.precio_unitario, 0)) ELSE 0 END), 0) AS "entradasPeriodo",
        
        -- Salidas Año Anterior dentro del periodo
        COALESCE(SUM(CASE WHEN m.tipo = 'SALIDA' AND EXTRACT(YEAR FROM m.fecha::date) = $3 AND m.fecha::date BETWEEN $1::date AND $2::date THEN (COALESCE(m.num_articulos_solicitados, 0) * COALESCE(c.precio_unitario, 0)) ELSE 0 END), 0) AS "salidasAnterior",
        
        -- Salidas Año Actual dentro del periodo
        COALESCE(SUM(CASE WHEN m.tipo = 'SALIDA' AND EXTRACT(YEAR FROM m.fecha::date) = $4 AND m.fecha::date BETWEEN $1::date AND $2::date THEN (COALESCE(m.num_articulos_solicitados, 0) * COALESCE(c.precio_unitario, 0)) ELSE 0 END), 0) AS "salidasActual"
      FROM cat_partidas cp
      LEFT JOIN cat_articulos ca ON ca.id_partidas = cp.id
      LEFT JOIN movimientosdg m ON m.id_articulo = ca.id
      LEFT JOIN costos c ON c.id = m.id_costos
      GROUP BY cp.clave, cp.descripcion
      ORDER BY cp.clave ASC;
    `;

    const resultado = await pool.query(consulta, [fechaIni, fechaFin, anioAnterior, anioActual]);

    let tSaldoAnterior = 0;
    let tSaldoActual = 0;
    let tEntradas = 0;
    let tSalidasAnterior = 0;
    let tSalidasActual = 0;
    let tSaldoFinalAnterior = 0;
    let tSaldoFinalActual = 0;

    const partidasMapeadas = resultado.rows.map((row) => {
      const sInitAnt = Number(row.saldoInicialAnterior);
      const sInitAct = Number(row.saldoInicialActual);
      const entradas = Number(row.entradasPeriodo);
      const salAnt = Number(row.salidasAnterior);
      const salAct = Number(row.salidasActual);

      const saldoFinalAnterior = sInitAnt - salAnt;
      const saldoFinalActual = sInitAct + entradas - salAct;

      tSaldoAnterior += sInitAnt;
      tSaldoActual += sInitAct;
      tEntradas += entradas;
      tSalidasAnterior += salAnt;
      tSalidasActual += salAct;
      tSaldoFinalAnterior += saldoFinalAnterior;
      tSaldoFinalActual += saldoFinalActual;

      return {
        partida: row.partida,
        noPartida: row.noPartida,
        saldoInicialAnterior: formatearMoneda(sInitAnt),
        saldoInicialActual: formatearMoneda(sInitAct),
        entradasPeriodo: formatearMoneda(entradas),
        salidasAnterior: formatearMoneda(salAnt),
        salidasActual: formatearMoneda(salAct),
        saldoFinalAnterior: formatearMoneda(saldoFinalAnterior),
        saldoFinalActual: formatearMoneda(saldoFinalActual)
      };
    });

    const saldoAlmacenInicial = tSaldoAnterior + tSaldoActual;
    const saldoAlmacenFinalAnterior = tSaldoAnterior - tSalidasAnterior;
    const saldoAlmacenFinalActual = tSaldoActual + tEntradas - tSalidasActual;

    const datosPlantilla = {
      usuario: usuario || 'USUARIO NO IDENTIFICADO',
      titulo: 'RESUMEN ALMACÉN',
      subtitulo: `ENTRADAS Y SALIDAS ${anioAnterior} Y ${anioActual} DEL ${formatearFecha(fechaIni)} AL ${formatearFecha(fechaFin)}`,
      anioAnterior,
      anioActual,
      fechaInicio: formatearFecha(fechaIni),
      fechaFin: formatearFecha(fechaFin),
      fechaReporte: formatearFecha(fechaReporte),
      partidas: partidasMapeadas,
      totales: {
        saldoInicialAnterior: formatearMoneda(tSaldoAnterior),
        saldoInicialActual: formatearMoneda(tSaldoActual),
        entradasPeriodo: formatearMoneda(tEntradas),
        salidasAnterior: formatearMoneda(tSalidasAnterior),
        salidasActual: formatearMoneda(tSalidasActual),
        saldoFinalAnterior: formatearMoneda(tSaldoFinalAnterior),
        saldoFinalActual: formatearMoneda(tSaldoFinalActual)
      },
      saldoAlmacen: {
        inicial: formatearMoneda(saldoAlmacenInicial),
        entradas: formatearMoneda(tEntradas),
        salidasAnterior: formatearMoneda(tSalidasAnterior),
        salidasActual: formatearMoneda(tSalidasActual),
        finalAnterior: formatearMoneda(saldoAlmacenFinalAnterior),
        finalActual: formatearMoneda(saldoAlmacenFinalActual)
      }
    };

    // Generar PDF con orientación horizontal (landscape) mediante Puppeteer
    const pdfBuffer = await generarPDF(
      'reporteResumenAlmacen.html',
      datosPlantilla,
      { landscape: true }
    );

    const nombreArchivo = `resumen_almacen_${fechaIni}_al_${fechaFin}.pdf`;

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${nombreArchivo}"`,
      'Content-Length': pdfBuffer.length
    });

    return res.send(pdfBuffer);

  } catch (error) {
    console.error('Error al generar el reporte de resumen de almacén:', error);
    return res.status(500).json({
      error: 'No se pudo generar el reporte de resumen de almacén'
    });
  }
};

module.exports = {
  generarReporteResumenAlmacen
};