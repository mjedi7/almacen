const { Pool } = require('pg');
const { generarPDF } = require('../services/pdfGenerator');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: process.env.PORT_BD
});

const capitalizar = (str) => {
  if (!str) return '';
  const s = str.toString().trim().toLowerCase();
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const generarReporteSalidasXPartida = async (req, res) => {
  try {
    const { partida, fecha_inicio, fecha_fin, usuario } = req.body;

    console.log('>>> [DEBUG] Parámetros recibidos en backend:', {
      partida,
      fecha_inicio,
      fecha_fin
    });

    const params = [fecha_inicio, fecha_fin];
    let condicionPartida = '';

    // Solo filtra por partida si NO es '0' y no viene vacía
    if (partida && partida !== '0') {
      params.push(partida.toString().trim());
      condicionPartida = `AND par.clave = $${params.length}`;
    }

    const query = `
      SELECT 
        par.clave AS "partida_clave",
        par.descripcion AS "partida_desc",
        ct.descripcion AS "centro_trabajo",
        ct.codigo AS "centro_codigo",
        pro.razon_social AS "proveedor",
        com.folio_compra || ' / ' || TO_CHAR(com.fecha_compra, 'TMMon') AS "folio_compra",
        TO_CHAR(com.fecha_compra, 'DD/MM/YYYY') AS "fecha_compra",
        SUM(mdg.num_articulos_solicitados * cos.precio_unitario) AS "total_movimiento"
      FROM movimientosdg mdg
        INNER JOIN centro_trabajo ct ON mdg.id_centrotrabajo_transfiere = ct.id
        INNER JOIN costos cos ON cos.id = mdg.id_costos
        INNER JOIN cat_proveedores pro ON pro.id = cos.id_proveedor
        INNER JOIN compras com ON com.id_costo = cos.id AND com.id_costo = mdg.id_costos
        INNER JOIN cat_articulos art ON art.id = cos.id_articulo
        INNER JOIN cat_partidas par ON par.id = art.id_partidas
      WHERE mdg.fecha::DATE >= TO_DATE($1, 'DD/MM/YYYY')
        AND mdg.fecha::DATE <= TO_DATE($2, 'DD/MM/YYYY')
        ${condicionPartida}
      GROUP BY 
        par.clave, par.descripcion, ct.descripcion, ct.codigo, 
        pro.razon_social, com.folio_compra, com.fecha_compra
      ORDER BY par.clave ASC, ct.codigo ASC, com.folio_compra ASC
    `;

    const { rows } = await pool.query(query, params);
    console.log(`>>> [DEBUG] Filas encontradas: ${rows.length}`);

    // Agrupación por partida
    let granTotal = 0;
    const gruposMap = new Map();

    for (const item of rows) {
      const monto = Number(item.total_movimiento || 0);
      granTotal += monto;

      const claveP = item.partida_clave;
      if (!gruposMap.has(claveP)) {
        gruposMap.set(claveP, {
          clave: claveP,
          descripcion: item.partida_desc,
          subtotal: 0,
          movimientos: []
        });
      }

      const grupo = gruposMap.get(claveP);
      grupo.subtotal += monto;

      grupo.movimientos.push({
        centro_trabajo: item.centro_trabajo,
        proveedor: capitalizar(item.proveedor),
        folio_compra: item.folio_compra,
        fecha_compra: item.fecha_compra,
        monto: monto.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
      });
    }

    const gruposPartidas = Array.from(gruposMap.values()).map(g => ({
      ...g,
      subtotalTexto: g.subtotal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }));

    const hoy = new Date();
    const dd = String(hoy.getDate()).padStart(2, '0');
    const mm = String(hoy.getMonth() + 1).padStart(2, '0');
    const yyyy = hoy.getFullYear();

    const templateData = {
      tituloAlmacen: 'Almacén General',
      periodo: `Del ${fecha_inicio} al ${fecha_fin}`,
      gruposPartidas,
      totalRegistrosImpresos: rows.length.toLocaleString('es-MX'),
      granTotal: granTotal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      usuario: usuario || 'ADMINISTRADOR',
      fechaImpresion: `${dd}/${mm}/${yyyy}`
    };

    // Asegúrate de que el nombre del archivo coincida exactamente con el que está en Back/src/templates/
    const pdfBuffer = await generarPDF('reporteSalidasPartida.html', templateData, { landscape: false });

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', pdfBuffer.length);
    res.send(pdfBuffer);

  } catch (error) {
    console.error('>>> ERROR DETALLADO EN SALIDAS:', error.stack || error);
    res.status(500).json({ error: 'Error al generar reporte de salidas', detalle: error.message });
  }
};

module.exports = { generarReporteSalidasXPartida };