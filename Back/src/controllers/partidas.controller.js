
const {Pool} = require('pg');
const pool = new Pool({host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: Number(process.env.PORT_BD || 5432),
});

const listarPartidas = async (req, res) => {

    try{
        const sql= `
        SELECT id, clave, descripcion FROM cat_partidas WHERE esactivo = true ORDER BY clave`;

        const {rows } = await pool.query(sql);
        return res.json({ok: true, partidas: rows});
    } catch(e){
        console.log(e);
        return res.status(500).json({ok: false, msg: 'Error al listar partidas'});
    }
};

module.exports = {listarPartidas}