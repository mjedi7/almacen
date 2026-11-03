const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: Number(process.env.PORT_BD || 5432),
});

// GET /proveedores (Listar todos los proveedores)
const listarProveedores = async (req, res) => {
  try {
    const query = `
      SELECT id, rfc, razon_social, direccion, municipio, telefono, codigo_postal, esactivo
      FROM cat_proveedores
      ORDER BY id DESC
    `;
    const { rows } = await pool.query(query);
    return res.status(200).json({ ok: true, proveedores: rows });
  } catch (err) {
    console.error('Error al listar proveedores:', err);
    return res.status(500).json({ ok: false, msg: 'Error al consultar proveedores', error: err.message });
  }
};

// POST /proveedores (Crear nuevo proveedor)
const crearProveedor = async (req, res) => {
  try {
    let {
      rfc,
      razon_social,
      direccion,
      municipio,
      telefono,
      codigo_postal,
      esactivo = true
    } = req.body;

    if (!rfc || !razon_social) {
      return res.status(400).json({
        ok: false,
        msg: 'El RFC y la Razón Social son campos obligatorios'
      });
    }

    rfc = String(rfc).trim().toUpperCase();
    razon_social = String(razon_social).trim();
    direccion = direccion ? String(direccion).trim() : '';
    municipio = municipio ? String(municipio).trim() : '';
    telefono = telefono ? String(telefono).trim() : '';
    codigo_postal = codigo_postal ? String(codigo_postal).trim() : '';

    // Validación de longitud de RFC (SAT: 12 caracteres morales, 13 físicos)
    if (rfc.length < 12 || rfc.length > 13) {
      return res.status(400).json({
        ok: false,
        msg: 'El RFC debe contener entre 12 y 13 caracteres alfanuméricos'
      });
    }

    // Validación de código postal (máximo 5 caracteres según schema)
    if (codigo_postal && codigo_postal.length > 5) {
      return res.status(400).json({
        ok: false,
        msg: 'El Código Postal no puede exceder 5 dígitos'
      });
    }

    // Comprobar existencia previa mediante RFC normalizado
    const checkQuery = `
      SELECT id, razon_social 
      FROM cat_proveedores 
      WHERE upper(btrim(rfc)) = $1 
      LIMIT 1
    `;
    const checkRes = await pool.query(checkQuery, [rfc]);

    if (checkRes.rowCount > 0) {
      return res.status(409).json({
        ok: false,
        msg: `Ya existe un proveedor registrado con el RFC "${rfc}": ${checkRes.rows[0].razon_social}`
      });
    }

    const insertQuery = `
      INSERT INTO cat_proveedores (
        rfc, 
        razon_social, 
        direccion, 
        municipio, 
        telefono, 
        codigo_postal, 
        esactivo
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, rfc, razon_social, direccion, municipio, telefono, codigo_postal, esactivo
    `;

    const { rows } = await pool.query(insertQuery, [
      rfc,
      razon_social,
      direccion,
      municipio,
      telefono,
      codigo_postal,
      esactivo !== false
    ]);

    return res.status(201).json({
      ok: true,
      msg: 'Proveedor registrado correctamente',
      proveedor: rows[0]
    });
  } catch (err) {
    console.error('Error al registrar proveedor:', err);
    if (err.code === '23505') {
      return res.status(409).json({
        ok: false,
        msg: 'El RFC ya se encuentra registrado en el sistema'
      });
    }
    return res.status(500).json({
      ok: false,
      msg: 'Error interno en el servidor al registrar el proveedor',
      error: err.message
    });
  }
};

// GET /proveedores/traerProveedoresPorArticulo/:idArticulo (Existente)
const traerProveedoresPorArticulo = async (req, res) => {
  try {
    const { idArticulo } = req.params;
    console.log('Consultando proveedores para artículo ID:', idArticulo);
    const query = `
      SELECT DISTINCT p.id, p.razon_social
      FROM cat_proveedores p
      INNER JOIN costos c ON p.id = c.id_proveedor
      WHERE c.id_articulo = $1
    `;
    const response = await pool.query(query, [idArticulo]);
    return res.status(200).json(response.rows);
  } catch (err) {
    console.error('Error al consultar proveedores por artículo:', err);
    return res.status(500).json({ message: 'Error en la base de datos' });
  }
};

module.exports = {
  listarProveedores,
  crearProveedor,
  traerProveedoresPorArticulo
};
