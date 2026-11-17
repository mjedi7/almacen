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
 * Ruta POST /reporte/resumen-almacen
 */
const generarReporteResumenAlmacen = async (req, res) => {
  try {
    const { fechaIni, fechaFin, fechaReporte, usuario } = req.body;

    const errorValidacion = validarFechas(fechaIni, fechaFin, fechaReporte);
    if (errorValidacion) {
      return res.status(400).json({ error: errorValidacion });
    }

    const anioActual = parseInt(fechaFin.split('-')[0], 10);
    const anioAnterior = anioActual - 1;

    // CONSULTA SQL INTEGRANDO LA TABLA ALMACEN, COMPRAS Y MOVIMIENTOS
    const consulta = `
      SELECT 
        cp.clave AS "noPartida",
        cp.descripcion AS "partida",
        
        -- Saldo inicial Año Anterior (Existencias en almacén valorizadas con costos al inicio del año anterior)
        COALESCE((
          SELECT SUM(COALESCE(alm.existencias, 0) * COALESCE(cos.precio_unitario, 0))
          FROM almacen alm
          JOIN costos cos ON cos.id = alm.id_costos
          WHERE alm.id_partida = cp.id
            AND alm.fecha_adquisicion::date < ($1::date - INTERVAL '1 year')
        ), 0) AS "saldoInicialAnterior",
        
        -- Saldo inicial Año Actual (Existencias valorizadas antes de fechaIni)
        COALESCE((
          SELECT SUM(COALESCE(alm.existencias, 0) * COALESCE(cos.precio_unitario, 0))
          FROM almacen alm
          JOIN costos cos ON cos.id = alm.id_costos
          WHERE alm.id_partida = cp.id
            AND alm.fecha_adquisicion::date < $1::date
        ), 0) AS "saldoInicialActual",
        
        -- Entradas del periodo (Compras realizadas entre fechaIni y fechaFin)
        COALESCE((
          SELECT SUM(COALESCE(comp.total_articulos, 0) * COALESCE(cos_c.precio_unitario, 0))
          FROM compras comp
          JOIN costos cos_c ON cos_c.id = comp.id_costo
          JOIN cat_articulos art ON art.id = cos_c.id_articulo
          WHERE art.id_partidas = cp.id
            AND comp.fecha_compra::date BETWEEN $1::date AND $2::date
        ), 0) AS "entradasPeriodo",
        
        -- Salidas Año Anterior dentro del periodo equivalente
        COALESCE((
          SELECT SUM(COALESCE(mov.num_articulos_solicitados, 0) * COALESCE(cos_m.precio_unitario, 0))
          FROM movimientosdg mov
          JOIN costos cos_m ON cos_m.id = mov.id_costos
          JOIN cat_articulos art_m ON art_m.id = mov.id_articulo
          WHERE art_m.id_partidas = cp.id
            AND mov.fecha::date BETWEEN ($1::date - INTERVAL '1 year') AND ($2::date - INTERVAL '1 year')
        ), 0) AS "salidasAnterior",
        
        -- Salidas del periodo en el Año Actual
        COALESCE((
          SELECT SUM(COALESCE(mov.num_articulos_solicitados, 0) * COALESCE(cos_m.precio_unitario, 0))
          FROM movimientosdg mov
          JOIN costos cos_m ON cos_m.id = mov.id_costos
          JOIN cat_articulos art_m ON art_m.id = mov.id_articulo
          WHERE art_m.id_partidas = cp.id
            AND mov.fecha::date BETWEEN $1::date AND $2::date
        ), 0) AS "salidasActual"

      FROM cat_partidas cp
      ORDER BY cp.clave ASC;
    `;

    const resultado = await pool.query(consulta, [fechaIni, fechaFin]);

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

      // Freno en $0.00 usando Math.max para evitar números negativos por desajustes históricos
      const saldoFinalAnterior = Math.max(0, sInitAnt - salAnt);
      const saldoFinalActual = Math.max(0, sInitAct + entradas - salAct);

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