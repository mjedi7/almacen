const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: Number(process.env.PORT_BD || 5432),
});

// GET /partidas
const listarPartidas = async (req, res) => {
  try {
    const sql = `
      SELECT id, clave, descripcion, esactivo 
      FROM cat_partidas 
      WHERE esactivo = true 
      ORDER BY clave ASC
    `;
    const { rows } = await pool.query(sql);
    return res.status(200).json({ ok: true, partidas: rows });
  } catch (e) {
    console.error('Error al listar partidas:', e);
    return res.status(500).json({ ok: false, msg: 'Error al listar partidas', error: e.message });
  }
};

// POST /partidas
const crearPartida = async (req, res) => {
  try {
    let { clave, descripcion, esactivo = true } = req.body;

    if (!clave || !descripcion) {
      return res.status(400).json({
        ok: false,
        msg: 'La clave y la descripción de la partida son obligatorias'
      });
    }

    clave = String(clave).trim();
    descripcion = String(descripcion).trim();

    // Validar si la clave ya existe (case-insensitive y sin espacios en bordes)
    const checkSql = `SELECT id, descripcion FROM cat_partidas WHERE upper(btrim(clave)) = upper($1) LIMIT 1`;
    const checkRes = await pool.query(checkSql, [clave]);

    if (checkRes.rowCount > 0) {
      return res.status(409).json({
        ok: false,
        msg: `Ya existe una partida con la clave "${clave}": ${checkRes.rows[0].descripcion}`
      });
    }

    const insertSql = `
      INSERT INTO cat_partidas (clave, descripcion, esactivo)
      VALUES ($1, $2, $3)
      RETURNING id, clave, descripcion, esactivo
    `;
    const { rows } = await pool.query(insertSql, [clave, descripcion, esactivo !== false]);

    return res.status(201).json({
      ok: true,
      msg: 'Partida registrada con éxito',
      partida: rows[0]
    });
  } catch (e) {
    console.error('Error al registrar partida:', e);
    return res.status(500).json({
      ok: false,
      msg: 'Error interno en el servidor al guardar la partida',
      error: e.message
    });
  }
};

module.exports = {
  listarPartidas,
  crearPartida
};
