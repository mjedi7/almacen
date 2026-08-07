const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: Number(process.env.PORT_BD || 5432),
});

// POST /articulos
const crearArticulo = async (req, res) => {
  try {

    let {
      clave,
      id_partidas,
      descripcion,
      esActivo = true,
      esBasico = true,
    } = req.body;

    if (!clave || !descripcion) {
      return res.status(400).json({ ok: false, msg: 'Faltan campos obligatorios' });
    }

   
    clave = String(clave).toUpperCase().trim();
    descripcion = String(descripcion).toUpperCase().trim();

    if (id_partidas === '' || id_partidas === undefined) {
      id_partidas = null;
    }

      const existeEnPartida = await pool.query (` 
      SELECT id FROM public.cat_articulos WHERE clave = $1 AND id_partidas = $2 LIMIT 1
      `, [clave, id_partidas]
    );

    if(existeEnPartida.rows.length >0) {
      return res.status(400).json({
        ok: false,
        msg: "La clave ${clave} ya existe dentro de la partida seleccionada"
      });
    }


    const sql = `
      INSERT INTO cat_articulos
      (clave, id_partidas, descripcion, esactivo, esbasico)
      VALUES ($1,$2,$3,$4,$5)
      RETURNING
        id, clave, id_partidas, descripcion,
        esactivo AS "esActivo",
        esbasico AS "esBasico"
    `;

    const params = [
      clave,
      id_partidas,
      descripcion,
      Boolean(esActivo),
      Boolean(esBasico),
    ];

    const { rows } = await pool.query(sql, params);
    return res.status(201).json({ ok: true, articulo: rows[0] });
  } catch (e) {
    console.error('crearArticulo error:', e);
    if (e.code === '23505') {
     
      return res.status(409).json({ ok: false, msg: 'Clave de artículo duplicada' });
    }
    return res.status(500).json({ ok: false, msg: 'Error del servidor' });
  }
};

// GET /articulos/:id
const obtenerArticuloPorId = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(400).json({ ok: false, msg: 'ID inválido' });
    }

    const { rows } = await pool.query(
      `
      SELECT
        id,
        clave,
        id_partidas,
        descripcion,
        esactivo AS "esActivo",
        esbasico AS "esBasico"
      FROM cat_articulos
      WHERE id = $1
      LIMIT 1
      `,
      [id]
    );

    if (!rows.length) {
      return res.status(404).json({ ok: false, msg: 'No encontrado' });
    }
    return res.json({ ok: true, articulo: rows[0] });
  } catch (e) {
    console.error('obtenerArticuloPorId error:', e);
    return res.status(500).json({ ok: false, msg: 'Error del servidor' });
  }
};

// PUT /articulos/:id
const actualizarArticulo = async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) {
      return res.status(400).json({ ok: false, msg: 'ID inválido' });
    }

    const {
      clave,
      id_partidas,
      descripcion,
      esActivo = true,
      esBasico = true,
    } = req.body;

    if (!clave || !descripcion) {
      return res.status(400).json({ ok: false, msg: 'Faltan campos obligatorios' });
    }

    const sql = `
      UPDATE cat_articulos
      SET
        clave = $1,
        id_partidas = $2,
        descripcion = $3,
        esactivo = $4,
        esbasico = $5
      WHERE id = $6
      RETURNING
        id, clave, id_partidas, descripcion,
        esactivo AS "esActivo",
        esbasico AS "esBasico"
    `;

    const params = [
      String(clave).toUpperCase().trim(),
      id_partidas ?? null,
      String(descripcion).toUpperCase().trim(),
      Boolean(esActivo),
      Boolean(esBasico),
      id,
    ];

    const { rows } = await pool.query(sql, params);
    if (!rows.length) {
      return res.status(404).json({ ok: false, msg: 'No encontrado' });
    }
    return res.json({ ok: true, articulo: rows[0] });
  } catch (e) {
    console.error('actualizarArticulo error:', e);
    if (e.code === '23505') {
      return res.status(409).json({ ok: false, msg: 'Clave duplicada' });
    }
    return res.status(500).json({ ok: false, msg: 'Error del servidor' });
  }
};

// GET /articulos
const listarArticulos = async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT
        id,
        clave,
        id_partidas,
        descripcion,
        esactivo AS "esActivo",
        esbasico AS "esBasico"
      FROM cat_articulos
      WHERE esactivo = true
      ORDER BY id DESC
    `);
    return res.json({ ok: true, articulos: rows });
  } catch (e) {
    console.error('listarArticulos error:', e);
    return res.status(500).json({ ok: false, msg: 'Error al listar los artículos' });
  }
};

module.exports = {
  crearArticulo,
  listarArticulos,
  obtenerArticuloPorId,
  actualizarArticulo,
};