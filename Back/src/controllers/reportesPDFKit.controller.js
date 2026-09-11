const { Pool } = require('pg');
const { generarPDF } = require('../services/pdfGenerator');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: process.env.PORT_BD
});

const pruebaReporte = async (req, res) => {
  try {
    const clavePartidaRaw = (req.params.clavePartida || req.query.clavePartida || '21101').toString().trim();
    const idParamRaw = (req.params.idCostos || req.query.idCostos || req.params.idArticulo || req.query.idArticulo || '48').toString().trim();
    const idParamInt = parseInt(idParamRaw, 10) || 0;
    const partidaInt = parseInt(clavePartidaRaw, 10) || 0;

    // 1. Consultas SQL
    const queryEncabezado = `
      SELECT 
        par.clave AS clave_partida,
        art.id AS id_articulo,
        art.clave AS clave_articulo,
        COALESCE(um.nombre_medida, art.unidad_medida, 'N/A') AS unidad_medida,
        art.descripcion AS nom_articulo,
        (
          SELECT m.fecha 
          FROM movimientosdg m 
          WHERE m.id_articulo = art.id 
          ORDER BY m.fecha DESC, m.id DESC 
          LIMIT 1
        ) AS fecha_ult_compra,
        COALESCE(
          (SELECT c.precio_unitario FROM costos c WHERE c.id_articulo = art.id ORDER BY c.id DESC LIMIT 1),
          0
        ) AS precio_unitario,
        COALESCE(
          (SELECT SUM(com.total_articulos) 
           FROM compras com 
           INNER JOIN costos cos ON cos.id = com.id_costo 
           WHERE cos.id_articulo = art.id), 
          0
        ) AS total_entradas_compras
      FROM cat_articulos art
        INNER JOIN cat_partidas par ON par.id = art.id_partidas
        LEFT JOIN unidad_medida um ON um.id = art.unidad_medida_id
      WHERE (par.clave = $1 OR par.id = $4)
        AND (
          art.id = $2 
          OR art.clave = $3
          OR art.id IN (SELECT id_articulo FROM costos WHERE id = $2)
        )
      LIMIT 1
    `;

    const queryDetalle = `
      SELECT 
        mdg.folio_transferencia AS "folio",
        COALESCE(ct.descripcion, 'OFICINAS CENTRALES') AS "plantel_destino",
        COALESCE(mdg.existencia_inicial, 0) AS existencia_inicial,
        COALESCE(mdg.num_articulos_solicitados, 0) AS "ventas_acumuladas",
        COALESCE(cos.precio_unitario, 0) AS "costo_unitario",
        COALESCE(mdg.existencia_final, 0) AS "existencia",
        mdg.fecha AS "fecha"
      FROM movimientosdg mdg
        INNER JOIN cat_articulos art ON art.id = mdg.id_articulo
        INNER JOIN cat_partidas par ON par.id = art.id_partidas 
        LEFT JOIN costos cos ON cos.id = mdg.id_costos 
        LEFT JOIN centro_trabajo ct ON ct.id = mdg.id_centrotrabajo_transfiere
      WHERE (par.clave = $1 OR par.id = $4)
        AND (
          art.id = $2 
          OR art.clave = $3
          OR mdg.id_articulo = $2
          OR mdg.id_costos = $2
        )
      ORDER BY mdg.fecha ASC, mdg.id ASC
    `;

    const params = [clavePartidaRaw, idParamInt, idParamRaw, partidaInt];

    const [resEncabezado, resDetalle] = await Promise.all([
      pool.query(queryEncabezado, params),
      pool.query(queryDetalle, params)
    ]);

    const headerData = resEncabezado.rows[0] || {};
    const movimientosDb = resDetalle.rows;

    // 2. Cálculos y formateo
    const totalSalidas = movimientosDb.reduce((acc, curr) => acc + Number(curr.ventas_acumuladas || 0), 0);

    let totalEntradas = Number(headerData.total_entradas_compras || 0);
    if (totalEntradas === 0 && movimientosDb.length > 0) {
      totalEntradas = Number(movimientosDb[0].existencia_inicial || 0);
    }

    let costoPromedio = 0;
    if (movimientosDb.length > 0) {
      const sumCostos = movimientosDb.reduce((acc, curr) => acc + Number(curr.costo_unitario || 0), 0);
      costoPromedio = sumCostos / movimientosDb.length;
    } else if (headerData.precio_unitario) {
      costoPromedio = Number(headerData.precio_unitario);
    }

    const movimientosFormateados = movimientosDb.map(mov => {
      const existIni = Number(mov.existencia_inicial || 0);
      const ventas = Number(mov.ventas_acumuladas || 0);
      const costoUni = Number(mov.costo_unitario || 0);
      const importeTotal = ventas * costoUni;
      const existFin = Number(mov.existencia || 0);

      return {
        folio: mov.folio || '-',
        plantel_destino: mov.plantel_destino || 'OFICINAS CENTRALES',
        existencia_inicial: existIni.toFixed(2),
        ventas_acumuladas: ventas.toFixed(2),
        importe_total: importeTotal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
        existencia: existFin.toFixed(2),
        fecha: mov.fecha ? new Date(mov.fecha).toLocaleDateString('es-MX') : ''
      };
    });

    const templateData = {
      header: {
        nom_articulo: headerData.nom_articulo || 'Sin descripción',
        clave_completa: `${headerData.clave_partida || clavePartidaRaw}-${headerData.clave_articulo || idParamRaw}`,
        fecha_ult_compra: headerData.fecha_ult_compra ? new Date(headerData.fecha_ult_compra).toLocaleDateString('es-MX') : 'Sin compras',
        unidad_medida: headerData.unidad_medida || 'N/A',
        costo_promedio: costoPromedio.toFixed(4)
      },
      movimientos: movimientosFormateados,
      totales: {
        entradas: totalEntradas.toFixed(2),
        salidas: totalSalidas.toFixed(2)
      }
    };

    // 3. Generación mediante el servicio compartido
    const pdfBuffer = await generarPDF('reporteKardex.html', templateData);

    // 4. Envío al cliente
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="kardex_${clavePartidaRaw}_${idParamRaw}.pdf"`);
    res.setHeader('Content-Length', pdfBuffer.length);
    res.send(pdfBuffer);

  } catch (error) {
    console.error('Error al generar PDF de Kárdex con Puppeteer:', error);
    res.status(500).json({ error: 'Error al consultar la base de datos o generar el documento' });
  }
};

module.exports = { pruebaReporte };