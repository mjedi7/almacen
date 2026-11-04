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
 * Genera el reporte de compras de todas las partidas.
 * Unifica las compras registradas en compras_reportes y en la tabla compras sin requerir vistas.
 */
const generarReporteEntradasTodas = async (req, res) => {
  try {
    const { fechaIni, fechaFin, fechaReporte, usuario } = req.body;

    const errorValidacion = validarFechas(fechaIni, fechaFin, fechaReporte);
    if (errorValidacion) {
      return res.status(400).json({ error: errorValidacion });
    }

    const consulta = `
      SELECT
        cr.folio_factura,
        cr.id_proveedor,
        COALESCE(cp.razon_social, 'PROVEEDOR NO IDENTIFICADO') AS razon_social,
        cr.fecha_compra,
        cr.importe,
        cr.impuesto,
        cr.total,
        cr.id_partida
      FROM (
        -- 1. Compras en compras_reportes
        SELECT 
          cr_tbl.folio_factura,
          cr_tbl.id_proveedor,
          cr_tbl.fecha_compra,
          COALESCE(cr_tbl.importe, 0) AS importe,
          COALESCE(cr_tbl.impuesto, 0) AS impuesto,
          COALESCE(cr_tbl.total, 0) AS total,
          cr_tbl.id_partida
        FROM compras_reportes cr_tbl

        UNION ALL

        -- 2. Compras en la tabla compras (que no estén duplicadas en compras_reportes)
        SELECT
          COALESCE(c.folio_compra, '') AS folio_factura,
          co.id_proveedor,
          c.fecha_compra,
          ROUND((c.total_articulos * co.precio_unitario), 2) AS importe,
          ROUND((c.total_articulos * co.precio_unitario * (COALESCE(co.iva, 16) / 100.0)), 2) AS impuesto,
          ROUND((c.total_articulos * co.precio_unitario * (1 + COALESCE(co.iva, 16) / 100.0)), 2) AS total,
          c.id_partidas AS id_partida
        FROM compras c
        JOIN costos co ON co.id = c.id_costo
        WHERE c.esactivo IS TRUE
          AND (c.id_compra_reporte IS NULL OR NOT EXISTS (SELECT 1 FROM compras_reportes cr2 WHERE cr2.id = c.id_compra_reporte))
      ) cr
      LEFT JOIN cat_proveedores cp ON cp.id = cr.id_proveedor
      WHERE cr.fecha_compra::date >= $1::date
        AND cr.fecha_compra::date <= $2::date
      ORDER BY cr.folio_factura
    `;

    const resultado = await pool.query(consulta, [fechaIni, fechaFin]);

    const acumulados = resultado.rows.reduce(
      (totales, registro) => {
        totales.importe += Number(registro.importe || 0);
        totales.impuesto += Number(registro.impuesto || 0);
        totales.total += Number(registro.total || 0);
        return totales;
      },
      { importe: 0, impuesto: 0, total: 0 }
    );

    const registros = resultado.rows.map((registro) => ({
      folioFactura: registro.folio_factura || '',
      proveedor: registro.razon_social,
      fechaCompra: registro.fecha_compra
        ? new Date(registro.fecha_compra).toLocaleDateString('es-MX', { timeZone: 'UTC' })
        : '',
      importe: formatearMoneda(registro.importe),
      impuesto: formatearMoneda(registro.impuesto),
      total: formatearMoneda(registro.total)
    }));

    const datosPlantilla = {
      usuario: usuario || 'USUARIO NO IDENTIFICADO',
      titulo: 'RESUMEN DE COMPRAS',
      documentos: 'Todos',
      proveedores: 'Todos',
      fechaInicio: formatearFecha(fechaIni),
      fechaFin: formatearFecha(fechaFin),
      fechaReporte: formatearFecha(fechaReporte),
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
        format: 'Letter',
        printBackground: true,
        landscape: false
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
