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
 * Genera el reporte de entradas de un proveedor.
 *
 * Ruta:
 * POST /reporte_de_compras_x_proveedor
 */
const generarReporteEntradasProveedor = async (req, res) => {
  try {
    const {
      fechaIni,
      fechaFin,
      fechaReporte,
      idproveedor,
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

    const idProveedor = Number(idproveedor);

    if (!Number.isInteger(idProveedor) || idProveedor <= 0) {
      return res.status(400).json({
        error: 'El proveedor seleccionado no es válido'
      });
    }

    const esCompra = req.body.modo === 'compras';

    // Consulta adaptada: Si es compra usa su vista con proveedor, si es entrada consulta costos vinculados al proveedor
    const consulta = esCompra ? `
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
      FROM v_compras_reportes cr
      LEFT JOIN cat_proveedores cp
        ON cp.id = cr.id_proveedor
      WHERE cr.fecha_compra::date >= $1::date
        AND cr.fecha_compra::date <= $2::date
        AND cr.id_proveedor = $3
      ORDER BY cr.folio_factura
    ` : `
      SELECT
        m.folio_transferencia AS folio_factura,
        c.id_proveedor AS id_proveedor,
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
        AND c.id_proveedor = $3
      ORDER BY m.folio_transferencia
    `;

    const consultaProveedor = `
      SELECT
        id,
        razon_social
      FROM cat_proveedores
      WHERE id = $1
      LIMIT 1
    `;

    const [
      resultadoCompras,
      resultadoProveedor
    ] = await Promise.all([
      pool.query(consulta, [
        fechaIni,
        fechaFin,
        idProveedor
      ]),
      pool.query(consultaProveedor, [idProveedor])
    ]);

    const proveedor = resultadoProveedor.rows[0];

    if (!proveedor) {
      return res.status(404).json({
        error: 'No se encontró el proveedor seleccionado'
      });
    }

    const acumulados = resultadoCompras.rows.reduce(
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

    const registros = resultadoCompras.rows.map(
      (registro) => ({
        folioFactura: registro.folio_factura || '',
        proveedor: registro.razon_social,
        fechaCompra: registro.fecha_compra
          ? new Date(
              registro.fecha_compra
            ).toLocaleDateString('es-MX', {
              timeZone: 'UTC'
            })
          : '',
        importe: formatearMoneda(registro.importe),
        impuesto: formatearMoneda(registro.impuesto),
        total: formatearMoneda(registro.total)
      })
    );

    const datosPlantilla = {
      usuario: usuario || 'USUARIO NO IDENTIFICADO',
      titulo: esCompra ? 'RESUMEN DE COMPRAS' : 'RESUMEN DE ENTRADAS',
      tipoReporte: 'Por proveedor',
      proveedor: {
        id: proveedor.id,
        razonSocial: proveedor.razon_social
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
      'reporteEntradasProveedor.html',
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
      `reporte_entradas_proveedor_${idProveedor}.pdf`;

    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition':
        `inline; filename="${nombreArchivo}"`,
      'Content-Length': pdfBuffer.length
    });

    return res.send(pdfBuffer);
  } catch (error) {
    console.error(
      'Error al generar el reporte de entradas por proveedor:',
      error
    );

    return res.status(500).json({
      error:
        'No se pudo generar el reporte de entradas por proveedor'
    });
  }
};

module.exports = {
  generarReporteEntradasProveedor
};