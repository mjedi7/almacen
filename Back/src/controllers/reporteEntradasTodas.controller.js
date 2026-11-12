const { Pool } = require('pg');
const { generarPDF } = require('../services/pdfGenerator');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: Number(process.env.PORT_BD || 5432)
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
 * Genera el reporte general de todas las partidas.
 * Unifica las consultas utilizando tablas reales sin requerir vistas.
 */
const generarReporteEntradasTodas = async (req, res) => {
  try {
    const {
      fechaIni,
      fechaFin,
      fechaReporte,
      usuario
    } = req.body;

    const errorValidacion = validarFechas(fechaIni, fechaFin, fechaReporte);
    if (errorValidacion) {
      return res.status(400).json({ error: errorValidacion });
    }

    const esCompra = req.body.modo === 'compras';

    // Consultas limpias y sin duplicados usando tablas reales para ambos modos
    const consulta = esCompra ? `
      SELECT
        m.folio_transferencia AS clave,
        COALESCE(cp.razon_social, 'PROVEEDOR NO IDENTIFICADO') AS nom_articulo,
        COALESCE(c.precio_unitario, 0) AS costo_unitario,
        COALESCE(m.existencia_final, m.existencia_inicial, m.num_articulos_solicitados, 0) AS existencia,
        (COALESCE(m.existencia_final, m.existencia_inicial, m.num_articulos_solicitados, 0) * COALESCE(c.precio_unitario, 0)) AS total
      FROM movimientosdg m
      LEFT JOIN costos c ON c.id = m.id_costos
      LEFT JOIN cat_proveedores cp ON cp.id = c.id_proveedor
      WHERE m.fecha::date >= $1::date
        AND m.fecha::date <= $2::date
      ORDER BY m.folio_transferencia
    ` : `
      SELECT
        COALESCE(ca.clave, 'S/C') AS clave,
        COALESCE(m.nom_articulo, ca.descripcion, 'ARTICULO SIN DESCRIPCION') AS nom_articulo,
        COALESCE(c.precio_unitario, 0) AS costo_unitario,
        COALESCE(m.existencia_final, m.existencia_inicial, m.num_articulos_solicitados, 0) AS existencia,
        (COALESCE(m.existencia_final, m.existencia_inicial, m.num_articulos_solicitados, 0) * COALESCE(c.precio_unitario, 0)) AS total
      FROM movimientosdg m
      LEFT JOIN costos c ON c.id = m.id_costos
      LEFT JOIN cat_articulos ca ON ca.id = COALESCE(m.id_articulo, c.id_articulo)
      WHERE m.fecha::date >= $1::date
        AND m.fecha::date <= $2::date
      ORDER BY ca.clave
    `;

    const resultado = await pool.query(consulta, [
      fechaIni,
      fechaFin
    ]);

    const acumulados = resultado.rows.reduce(
      (totales, registro) => {
        totales.importe += Number(registro.total || 0);
        totales.total += Number(registro.total || 0);
        return totales;
      },
      { importe: 0, impuesto: 0, total: 0 }
    );

    // Mapeo limpio y sin duplicados para la plantilla HTML
    const registros = resultado.rows.map((registro) => ({
      clave: registro.clave || '',
      articulo: registro.nom_articulo || 'ARTICULO SIN DESCRIPCION',
      costo: formatearMoneda(registro.costo_unitario || 0).replace('$', '').trim(),
      existencia: registro.existencia || 0,
      costoTotal: formatearMoneda(registro.total || 0).replace('$', '').trim()
    }));

    const fechaReporteFormateada = formatearFecha(fechaReporte);

    const datosPlantilla = {
      usuario: usuario || 'ADMINISTRADOR',
      nombreUsuario: usuario || 'ADMINISTRADOR',
      titulo: esCompra ? 'RESUMEN DE COMPRAS' : 'RESUMEN DE ENTRADAS',
      documentos: 'Todos',
      proveedores: 'Todos',
      fechaInicio: formatearFecha(fechaIni),
      fechaFin: formatearFecha(fechaFin),
      fechaReporte: fechaReporteFormateada,
      fechaImpresion: fechaReporteFormateada, // Garantiza que coincida en el pie de página
      registros,
      hayRegistros: registros.length > 0,
      totalRegistros: registros.length,
      totales: {
        subtotal: formatearMoneda(acumulados.importe),
        iva: formatearMoneda(acumulados.impuesto),
        total: formatearMoneda(acumulados.total)
      }
    };

    const pdfBuffer = await generarPDF(
      'reporteEntradasTodas.html',
      datosPlantilla,
      {
        tipoDiseno: 'con-pie',
        estamparCenefa: true
      }
    );

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="reporte_compras_todas.pdf"',
      'Content-Length': pdfBuffer.length
    });

    return res.send(pdfBuffer);
  } catch (error) {
    console.error('Error al generar el reporte de compras de todas las partidas:', error);
    return res.status(500).json({
      error: 'No se pudo generar el reporte de compras de todas las partidas'
    });
  }
};

module.exports = {
  generarReporteEntradasTodas
};