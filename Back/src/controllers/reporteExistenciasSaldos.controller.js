const { Pool } = require('pg');
const { generarPDF } = require('../services/pdfGenerator');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: process.env.PORT_BD
});

// Formatea fecha YYYY-MM-DD -> DD/MM/YYYY para el título
const fechaTexto = (iso) => {
  if (!iso) return '';
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
};

// Formato de moneda es-MX con 2 decimales
const fmtMoneda = (n) =>
  Number(n).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const generarReporteExistenciasSaldos = async (req, res) => {
  try {
    const { fechaInicio, fechaFin, usuario } = req.body;

    // ---- Validaciones ----
    if (!fechaInicio || !fechaFin) {
      return res.status(400).json({ error: 'Debes enviar fechaInicio y fechaFin (YYYY-MM-DD)' });
    }
    if (fechaInicio > fechaFin) {
      return res.status(400).json({ error: 'La fechaInicio no puede ser mayor que fechaFin' });
    }

    // ============================================================
    // CONSULTA
    // NOTA: ajusta los JOIN si tu lógica de negocio difiere.
    // Asume:
    //   - Entradas = recepciones_compra_detalle entre las 2 fechas
    //   - Salidas  = movimientos.articulos_disminuir entre las 2 fechas
    //   - Existencia F2 = almacen.existencias (saldo actual)
    //   - Existencia F1 = F2 - entradas + salidas
    //   - Importe  = F2 * costos.precio_unitario * 1.16 (igual que tu controlador)
    // ============================================================
    const query = `
      WITH entradas AS (
        SELECT c.id_almacen, SUM(rcd.cantidad) AS total
        FROM recepciones_compra_detalle rcd
        JOIN recepciones_compra rc ON rc.id = rcd.id_recepcion
        JOIN compras c ON c.id = rcd.id_compra
        WHERE rc.fecha_recepcion BETWEEN $1 AND $2
        GROUP BY c.id_almacen
      ),
      salidas AS (
        SELECT id_costos, SUM(articulos_disminuir) AS total
        FROM movimientos
        WHERE fecha_movimiento BETWEEN $1 AND $2
        GROUP BY id_costos
      )
      SELECT
        pa.clave                             AS "partida",
        LOWER(ca.descripcion)                AS "concepto",
        COALESCE(al.existencias, 0)          AS "existencia_actual",
        COALESCE(e.total, 0)                 AS "entradas",
        COALESCE(s.total, 0)                 AS "salidas",
        (co.precio_unitario * 1.16)          AS "costo_unitario"
      FROM almacen al
        INNER JOIN costos co ON (al.id_costos = co.id)
        INNER JOIN cat_articulos ca ON (co.id_articulo = ca.id)
        INNER JOIN cat_partidas pa ON (ca.id_partidas = pa.id)
        LEFT JOIN entradas e ON e.id_almacen = al.id
        LEFT JOIN salidas  s ON s.id_costos  = co.id
      WHERE al.esactivo IS NOT FALSE
      ORDER BY pa.clave ASC, ca.clave ASC
    `;

    const { rows } = await pool.query(query, [fechaInicio, fechaFin]);

    // ---- Cálculos ----
    let subtotal = 0;
    let existenciasTotales = 0;

    const articulos = rows.map((r) => {
      const entradas = Number(r.entradas);
      const salidas  = Number(r.salidas);
      const existF2  = Number(r.existencia_actual);
      const existF1  = existF2 - entradas + salidas;
      const importe  = existF2 * Number(r.costo_unitario);

      subtotal += importe;
      existenciasTotales += existF2;

      return {
        partida:      r.partida,
        concepto:     r.concepto,
        existenciaF1: existF1.toLocaleString('es-MX'),
        entradas:     entradas.toLocaleString('es-MX'),
        salidas:      salidas.toLocaleString('es-MX'),
        existenciaF2: existF2.toLocaleString('es-MX'),
        importe:      fmtMoneda(importe),
      };
    });

    const iva   = subtotal * 0.16;
    const total = subtotal + iva;

    // ---- Datos para el template ----
    const templateData = {
      fechaInicio,
      fechaFin,
      fechaInicioTexto: fechaTexto(fechaInicio),
      fechaFinTexto:    fechaTexto(fechaFin),
      fechaInicioCorta: fechaTexto(fechaInicio),
      fechaFinCorta:    fechaTexto(fechaFin),
      articulos,
      subtotal: fmtMoneda(subtotal),
      iva:      fmtMoneda(iva),
      total:    fmtMoneda(total),
      existenciasTotales: existenciasTotales.toLocaleString('es-MX'),
      totalRegistros: articulos.length.toLocaleString('es-MX'),
      usuario: usuario || 'ADMINISTRADOR',
      fechaImpresion: fechaTexto(fechaFin),
    };

    // ---- Generación del PDF (usa tu servicio tal cual) ----
    const pdfBuffer = await generarPDF('reporteExistenciasSaldos.html', templateData, {
      landscape: false,
      usuario: templateData.usuario,
      fechaPie: templateData.fechaImpresion,
    });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', pdfBuffer.length);
    res.send(pdfBuffer);

  } catch (error) {
    console.error('Error generando reporte de existencias y saldos:', error);
    res.status(500).json({ error: 'Error al generar el reporte de existencias y saldos' });
  }
};

module.exports = { generarReporteExistenciasSaldos };