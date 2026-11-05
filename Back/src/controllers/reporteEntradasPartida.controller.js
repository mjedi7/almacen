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
 * Genera el reporte de entradas de una partida determinada.
 *
 * Ruta:
 * POST /reporte_de_compras_x_partida
 */
const generarReporteEntradasPartida = async (req, res) => {
  try {
    const {
      fechaIni,
      fechaFin,
      fechaReporte,
      partida,
      usuario
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

    const idPartida = Number(partida);

    if (!Number.isInteger(idPartida) || idPartida <= 0) {
      return res.status(400).json({
        error: 'La partida seleccionada no es válida'
      });
    }

    const esCompra = req.body.modo === 'compras';

    // Consultas limpias sin duplicados y usando tablas reales para evitar errores de vistas faltantes
    const consulta = esCompra ? `
      SELECT
        m.folio_transferencia AS folio_factura,
        c.id_proveedor,
        COALESCE(cp.razon_social, 'PROVEEDOR NO IDENTIFICADO') AS razon_social,
        m.fecha AS fecha_compra,
        (COALESCE(m.num_articulos_solicitados, 0) * COALESCE(c.precio_unitario, 0)) AS importe,
        ((COALESCE(m.num_articulos_solicitados, 0) * COALESCE(c.precio_unitario, 0)) * 0.16) AS impuesto,
        ((COALESCE(m.num_articulos_solicitados, 0) * COALESCE(c.precio_unitario, 0)) * 1.16) AS total,
        ca.id_partidas AS id_partida
      FROM movimientosdg m
      LEFT JOIN costos c ON c.id = m.id_costos
      LEFT JOIN cat_proveedores cp ON cp.id = c.id_proveedor
      LEFT JOIN cat_articulos ca ON ca.id = COALESCE(m.id_articulo, c.id_articulo)
      WHERE m.fecha::date >= $1::date
        AND m.fecha::date <= $2::date
        AND ca.id_partidas = $3
      ORDER BY m.folio_transferencia
    ` : `
      SELECT
        m.folio_transferencia AS folio_factura,
        NULL AS id_proveedor,
        COALESCE(m.nom_articulo, ca.descripcion, 'ARTICULO SIN DESCRIPCION') AS razon_social,
        m.fecha AS fecha_compra,
        (COALESCE(m.num_articulos_solicitados, 0) * COALESCE(c.precio_unitario, 0)) AS importe,
        ((COALESCE(m.num_articulos_solicitados, 0) * COALESCE(c.precio_unitario, 0)) * 0.16) AS impuesto,
        ((COALESCE(m.num_articulos_solicitados, 0) * COALESCE(c.precio_unitario, 0)) * 1.16) AS total,
        ca.id_partidas AS id_partida
      FROM movimientosdg m
      LEFT JOIN costos c ON c.id = m.id_costos
      LEFT JOIN cat_articulos ca ON ca.id = COALESCE(m.id_articulo, c.id_articulo)
      WHERE m.fecha::date >= $1::date
        AND m.fecha::date <= $2::date
        AND ca.id_partidas = $3
      ORDER BY m.folio_transferencia
    `;

    const resultado = await pool.query(consulta, [
      fechaIni,
      fechaFin,
      idPartida
    ]);

    const consultaPartida = `
      SELECT
        clave,
        descripcion
      FROM cat_partidas
      WHERE id = $1
      LIMIT 1
    `;

    const resultadoPartida = await pool.query(
      consultaPartida,
      [idPartida]
    );

    const datosPartida = resultadoPartida.rows[0] || {};

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

    const clavePartida =
      datosPartida.clave || idPartida.toString();

    const descripcionPartida =
      datosPartida.descripcion || 'Sin descripción';

    const datosPlantilla = {
      usuario: usuario || 'USUARIO NO IDENTIFICADO',
      titulo: esCompra ? 'RESUMEN DE COMPRAS' : 'RESUMEN DE ENTRADAS',
      tipoReporte: 'Por partida',
      partida: {
        id: idPartida,
        clave: clavePartida,
        descripcion: descripcionPartida
      },
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
      'reporteEntradasPartida.html',
      datosPlantilla,
      {
        format: 'Letter',
        landscape: false,
        printBackground: true,
        margin: {
          top: '12mm',
          bottom: '17mm',
          left: '10mm',
          right: '10mm'
        }
      }
    );

    const nombreArchivo =
      `reporte_entradas_partida_${clavePartida}.pdf`;

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition':
        `inline; filename="${nombreArchivo}"`,
      'Content-Length': pdfBuffer.length
    });

    return res.send(pdfBuffer);
  } catch (error) {
    console.error(
      'Error al generar el reporte de entradas por partida:',
      error
    );

    return res.status(500).json({
      error:
        'No se pudo generar el reporte de entradas por partida'
    });
  }
};

module.exports = {
  generarReporteEntradasPartida
};