console.log('Controlador cargado');
// Arriba en articulos.js:


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
      unidad_medida_id,
      esActivo = true,
      esBasico = true,
      limite_max_a = 0,
      limite_max_b = 0,
      limite_max_c = 0
    } = req.body;

    if (!descripcion || !id_partidas || !clave) {
      return res.status(400).json({ ok: false, msg: 'Faltan datos obligatorios' });
    }

    const query = `
      INSERT INTO cat_articulos (
        clave,
        id_partidas,
        descripcion,
        unidad_medida_id,
        esactivo,
        esbasico,
        limite_max_a,
        limite_max_b,
        limite_max_c
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
    `;

    const values = [
      String(clave).trim(),
      Number(id_partidas),
      String(descripcion).toUpperCase().trim(),
      unidad_medida_id ? Number(unidad_medida_id) : null,
      Boolean(esActivo),
      Boolean(esBasico),
      limite_max_a,
      limite_max_b,
      limite_max_c
    ];

    const { rows } = await pool.query(query, values);
    return res.status(201).json({ ok: true, articulo: rows[0] });

  } catch (e) {
    console.error('Error al crear articulo:', e);
    return res.status(500).json({ ok: false, msg: 'Error al crear artículo', error: e.message });
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

// GET /articulos/siguiente-clave/:idPartida
const obtenerSiguienteClave = async (req, res) => {
  try {
    const { idPartida } = req.params;

    if (!idPartida || idPartida === 'null' || idPartida === 'undefined') {
      return res.status(400).json({ ok: false, msg: 'ID de partida requerido' });
    }

    // Busca la clave numérica más alta para esa partida específica y le suma 1
    const query = `
      SELECT LPAD(
        (COALESCE(
          MAX(
            CASE 
              WHEN clave ~ '^[0-9]+$' THEN clave::integer 
              ELSE NULLIF(regexp_replace(clave, '[^0-9]', '', 'g'), '')::integer 
            END
          ), 
          0
        ) + 1)::text, 
        3, 
        '0'
      ) AS siguiente_clave
      FROM cat_articulos
      WHERE id_partidas = $1::integer
    `;

    const { rows } = await pool.query(query, [Number(idPartida)]);
    const clave = rows[0]?.siguiente_clave || '001';

    return res.status(200).json({ ok: true, clave });

  } catch (e) {
    console.error('Error al obtener siguiente clave:', e);
    return res.status(500).json({ ok: false, msg: 'Error al obtener la siguiente clave', error: e.message });
  }
};

// GET /traerProductos/:idPartida
const traerProductosPorPartida = async (req, res) => {
  try {
    const { idPartida } = req.params;

    // FILTRA POR LA PARTIDA SELECCIONADA
    const query = `
      SELECT id, descripcion, clave 
      FROM cat_articulos_general 
      WHERE id_partidas = $1
      ORDER BY descripcion ASC
    `;

    const { rows } = await pool.query(query, [idPartida]);
    return res.status(200).json(rows);

  } catch (e) {
    console.error('traerProductosPorPartida error:', e);
    return res.status(500).json({ ok: false, msg: 'Error al traer productos' });
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


// Agregado por Oscar
const guardarExistenciasIniciales = async (req, res) => {
    const client = await pool.connect();
    try {

      console.log('URL:', req.originalUrl);
      console.log('METHOD:', req.method);
      console.log('USUARIO JWT:', req.usuario);

        const articulosACargar = req.body; // Es la listaTemporal de Angular
        
        await client.query('BEGIN'); // Iniciamos transacción para seguridad

        console.log('BODY:', req.body);
        console.log('TIPO:', typeof req.body);
        console.log('LONGITUD:', req.body.length);

        // 🔥 NUEVA LÍNEA: Extraer id_centrotrabajo del JWT
        const { email, id_centrotrabajo } = req.usuario;

        if (!id_centrotrabajo) {
          await client.query('ROLLBACK');
          return res.status(400).json({ 
            ok: false, 
            error: "No se encontró el id del centro de trabajo en el JWT" 
          });
        }

        const idCentroTrabajo = id_centrotrabajo;
        console.log('Usuario:', email, '→ Plantel:', idCentroTrabajo);

        for (const item of articulosACargar) {

          // Obtener datos del artículo
          const articulo = await client.query(`
              SELECT descripcion, unidad_medida, id_partidas
              FROM cat_articulos_general
              WHERE id = $1
          `, [item.id_articulo]);
          
          console.log('RESULTADO SELECT:', articulo.rows);
      
          const data = articulo.rows[0];

          // Obtener costo del artículo
          const costo = await client.query(`
            SELECT id
            FROM costos
            WHERE id_articulo = $1
              AND esactivo = true
            ORDER BY fecha_inicio DESC
            LIMIT 1
        `, [item.id_articulo]);
        
        const costoData = costo.rows[0];
        
        const idCosto = costoData ? costoData.id : null;
        
        console.log('COSTO ENCONTRADO:', idCosto);
        
        
          if (!data) {
              throw new Error('Artículo no encontrado: ' + item.id_articulo);
          }
      
          const unidad = (data.unidad_medida === '\\N' || !data.unidad_medida)
          ? 'N/A'
          : data.unidad_medida;
      
          const queryText = `
          INSERT INTO almacen (
              id_centrotrabajo,
              existencias,
              fecha_adquisicion,
              esactivo,
              unidad,
              descripcion,
              id_partida,
              nombre_producto,
              id_costos
          )
          VALUES ($1, $2, NOW(), true, $3, $4, $5, $6, $7)
        `;
      
          const values = [
              idCentroTrabajo,
              item.cantidad,
              unidad,
              data.descripcion,
              parseInt(data.id_partidas),
              data.descripcion,
              idCosto
          ];
      
          console.log('INSERTANDO:', values);
      
          await client.query(queryText, values);
        }

        console.log('ANTES DE COMMIT');
        await client.query('COMMIT');
        console.log('DESPUÉS DE COMMIT');

        // devolver Status
        return res.status(200).json({
            ok: true,
            mensaje: "Inventario en Dirección General actualizado correctamente"
        });

    } catch (error) {
        await client.query('ROLLBACK');
        console.log("Error en carga de inventario: " + error);
        res.status(500).json({ ok: false, error: error.message });
    } finally {
        client.release();
    }
};


// Agregado por Oscar
// GET /articulos/partidas
const listarPartidas = async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT id, clave, descripcion
      FROM cat_partidas
      WHERE esactivo = true
      ORDER BY clave ASC
    `);
    return res.json({ ok: true, partidas: rows });
  } catch (e) {
    console.error('listarPartidas error:', e);
    return res.status(500).json({ ok: false, msg: 'Error al listar partidas' });
  }
};

// GET /articulos/general?id_partidas=1
const listarArticulosGeneral = async (req, res) => {
  try {
    const { id_partidas } = req.query;

    let sql = `
      SELECT id, clave, id_partidas, descripcion, unidad_medida
      FROM cat_articulos_general
    `;
    const params = [];

    if (id_partidas) {
      sql += ` WHERE id_partidas = $1`;
      params.push(String(id_partidas));
    }

    sql += ` ORDER BY descripcion ASC`;

    const { rows } = await pool.query(sql, params);
    return res.json({ ok: true, articulos: rows });
  } catch (e) {
    console.error('listarArticulosGeneral error:', e);
    return res.status(500).json({ ok: false, msg: 'Error al listar artículos generales' });
  }
};

module.exports = {
  crearArticulo,
  listarArticulos,
  obtenerArticuloPorId,
  actualizarArticulo,
  guardarExistenciasIniciales,
  listarPartidas,
  listarArticulosGeneral,
  traerProductosPorPartida,
  obtenerSiguienteClave,
};