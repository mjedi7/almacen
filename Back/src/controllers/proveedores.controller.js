const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: Number(process.env.PORT_BD || 5432),
});

const traerProveedoresPorArticulo = async (req, res) => {
  try {
    const { idArticulo } = req.params;

    // Cambiamos p.nombre_razon_social por p.razon_social
    const query = `
      SELECT DISTINCT p.id, p.razon_social
      FROM cat_proveedores p
      INNER JOIN costos c ON p.id = c.id_proveedor
      WHERE c.id_articulo = $1 AND c.esactivo = true
    `;

    const response = await pool.query(query, [idArticulo]);

    return res.status(200).json(response.rows);

  } catch (err) {
    console.error('Error al consultar proveedores por artículo:', err);
    return res.status(500).json({ message: 'Error en la base de datos' });
  }
};

module.exports = { traerProveedoresPorArticulo };