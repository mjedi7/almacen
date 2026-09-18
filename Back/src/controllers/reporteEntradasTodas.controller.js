const { Pool } = require('pg');
const { generarPDF } = require('../services/pdfGenerator');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: process.env.PORT_BD
});

/**
 * Convierte YYYY-MM-DD a DD-MM-YYYY sin utilizar Date,
 * evitando cambios ocasionados por la zona horaria.
 */
const formatearFecha = (fecha) => {
  if (!fecha) {
    return '';
  }

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

  if (
    !formatoFecha.test(fechaIni) ||
    !formatoFecha.test(fechaFin) ||
    !formatoFecha.test(fechaReporte)
  ) {
    return 'Las fechas deben tener el formato YYYY-MM-DD';
  }

  if (fechaIni > fechaFin) {
    return 'La fecha inicial no puede ser posterior a la fecha final';
  }

  return null;
};

/**
 * Genera el reporte de entradas de todas las partidas.
 *
 * Ruta:
 * POST /reporte_de_compras_todas
 */
const generarReporteEntradasTodas = async (req, res) => {
  try {
    const {
      fechaIni,
      fechaFin,
      fechaReporte
    } = req.body;

    const errorValidacion = validarFechas(
      fechaIni,
      fechaFin,
      fechaReporte
    );

    if (errorValidacion) {
      return res.status(400).json({
        error: errorValidacion
      });
    }

    const consulta = `
      SELECT
        cr.folio_factura,
        cr.id_proveedor,
        COALESCE(
          cp.razon_social,
          'PROVEEDOR NO IDENTIFICADO'
        ) AS razon_social,
        cr.fecha_compra,
        COALESCE(cr.importe, 0) AS importe,
        COALESCE(cr.impuesto, 0) AS impuesto,
        COALESCE(cr.total, 0) AS total,
        cr.id_partida
      FROM compras_reportes cr
      LEFT JOIN cat_proveedores cp
        ON cp.id = cr.id_proveedor
      WHERE cr.fecha_compra::date >= $1::date
        AND cr.fecha_compra::date <= $2::date
      ORDER BY cr.folio_factura
    `;

    const resultado = await pool.query(consulta, [
      fechaIni,
      fechaFin
    ]);

    const acumulados = resultado.rows.reduce(
      (totales, registro) => {
        totales.importe += Number(registro.importe || 0);
        totales.impuesto += Number(registro.impuesto || 0);
        totales.total += Number(registro.total || 0);

        return totales;
      },
      {
        importe: 0,
        impuesto: 0,
        total: 0
      }
    );

    const registros = resultado.rows.map((registro) => ({
      folioFactura: registro.folio_factura || '',
      proveedor: registro.razon_social,
      fechaCompra: registro.fecha_compra
        ? new Date(registro.fecha_compra).toLocaleDateString(
            'es-MX',
            { timeZone: 'UTC' }
          )
        : '',
      importe: formatearMoneda(registro.importe),
      impuesto: formatearMoneda(registro.impuesto),
      total: formatearMoneda(registro.total)
    }));

    const datosPlantilla = {
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
        landscape: true,
        printBackground: true,
        margin: {
          top: '12mm',
          bottom: '17mm',
          left: '10mm',
          right: '10mm'
        }
      }
    );

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition':
        'inline; filename="reporte_entradas_todas.pdf"',
      'Content-Length': pdfBuffer.length
    });

    return res.send(pdfBuffer);
  } catch (error) {
    console.error(
      'Error al generar el reporte de entradas de todas las partidas:',
      error
    );

    return res.status(500).json({
      error:
        'No se pudo generar el reporte de entradas de todas las partidas'
    });
  }
};

module.exports = {
  generarReporteEntradasTodas
};