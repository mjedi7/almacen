const path = require('path');
const fs = require('fs');
const { Pool } = require('pg');
const { generarPDF } = require('../services/pdfGenerator');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: process.env.PORT_BD
});

const obtenerDatosReporteSurtido = async (idPlantel, folio, conMontos) => {
  const queryEncabezado = `
    SELECT 
      descripcion, 
      COALESCE(director, '') AS director, 
      COALESCE(administrativo, '') AS administrativo 
    FROM centro_trabajo 
    WHERE id = $1 
    LIMIT 1
  `;

  const queryFecha = `
    SELECT fecha 
    FROM movimientosdg 
    WHERE id_centrotrabajo_transfiere = $1 AND folio_transferencia = $2 
    ORDER BY id DESC 
    LIMIT 1
  `;

  const queryArticulos = `
    SELECT   
      movimientosdg.folio_transferencia AS folio,
      movimientosdg.fecha,
      cat_partidas.clave || '-' || cat_articulos.clave AS clave_completa,
      LOWER(movimientosdg.nom_articulo) AS descripcion,
      cat_articulos.clave AS clave_articulo,
      movimientosdg.num_articulos_solicitados AS cantidad,
      costos.precio_unitario::numeric AS precio_unitario,
      (movimientosdg.num_articulos_solicitados * costos.precio_unitario)::numeric AS importe_total
    FROM movimientosdg
      INNER JOIN costos ON costos.id = movimientosdg.id_costos
      INNER JOIN cat_articulos ON cat_articulos.id = costos.id_articulo
      INNER JOIN cat_partidas ON cat_partidas.id = cat_articulos.id_partidas
    WHERE movimientosdg.folio_transferencia = $1 
      AND movimientosdg.id_centrotrabajo_transfiere = $2
    ORDER BY cat_partidas.clave ASC, cat_articulos.clave ASC
  `;
  const [resEncabezado, resFecha, resArticulos] = await Promise.all([
    pool.query(queryEncabezado, [idPlantel]),
    pool.query(queryFecha, [idPlantel, folio]),
    pool.query(queryArticulos, [folio, idPlantel])
  ]);

  const plantelData = resEncabezado.rows[0] || {};
  const fechaData = resFecha.rows[0] || {};
  const rowsArticulos = resArticulos.rows;

  let sumaSubtotal = 0;

  const articulos = rowsArticulos.map(art => {
    const cantidad = Number(art.cantidad || 0);
    const pu = Number(art.precio_unitario || 0);
    const imp = Number(art.importe_total || (cantidad * pu));
    sumaSubtotal += imp;

    const desc = (art.descripcion || '').trim();
    const descCapitalizada = desc.length > 0 ? desc.charAt(0).toUpperCase() + desc.slice(1) : '-';

    return {
      cantidad: cantidad,
      clave: art.clave_completa,
      descripcion: descCapitalizada,
      precio_unitario: pu.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 6 }),
      importe_total: imp.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    };
  });

  const iva = sumaSubtotal * 0.16;
  const total = sumaSubtotal + iva;

  return {
    conMontos,
    folioFormateado: String(folio).padStart(5, '0'),
    meta: {
      plantel: plantelData.descripcion || 'OFICINAS CENTRALES',
      administrativo: plantelData.administrativo || '',
      director: plantelData.director || '',
      fecha: fechaData.fecha ? new Date(fechaData.fecha).toLocaleDateString('es-MX', { day: '2-digit', month: 'long', year: 'numeric' }) : new Date().toLocaleDateString('es-MX')
    },
    articulos,
    totales: {
      subtotal: sumaSubtotal.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      iva: iva.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      total: total.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }
  };
};

const ListaArticulosSurtidos = async (req, res) => {
  const idPlantel = parseInt(req.params.plantel, 10);
  const folio = parseInt(req.params.folio, 10);

  try {
    const dataReporte = await obtenerDatosReporteSurtido(idPlantel, folio, true);
    const pdfBuffer = await generarPDF('reporteListaSurtido.html', dataReporte);

    const folderPath = path.join(__dirname, '/reportes');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, `Transferencia_Con_Montos-${Date.now()}.pdf`);
    fs.writeFileSync(filePath, pdfBuffer);

    console.log('PDF con montos guardado en:', filePath);
    res.json('pdf1-Generado');
  } catch (error) {
    console.error('Error en ListaArticulosSurtidos:', error);
    res.status(500).json({ error: 'Error al generar el reporte con montos' });
  }
};

const ListaArticulosSurtidosSinMontos = async (req, res) => {
  const idPlantel = parseInt(req.params.plantel, 10);
  const folio = parseInt(req.params.folio, 10);

  try {
    const dataReporte = await obtenerDatosReporteSurtido(idPlantel, folio, false);
    const pdfBuffer = await generarPDF('reporteListaSurtido.html', dataReporte);

    const folderPath = path.join(__dirname, '/reportes');
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    }

    const filePath = path.join(folderPath, `Transferencia_Sin_Montos-${Date.now()}.pdf`);
    fs.writeFileSync(filePath, pdfBuffer);

    console.log('PDF sin montos guardado en:', filePath);
    res.json('pdf2-Generado');
  } catch (error) {
    console.error('Error en ListaArticulosSurtidosSinMontos:', error);
    res.status(500).json({ error: 'Error al generar el reporte sin montos' });
  }
};

module.exports = {
  ListaArticulosSurtidos,
  ListaArticulosSurtidosSinMontos
};