const { response } = require('express');
const { Pool } = require('pg');

// Configuración de la conexión (asegúrate de que tenga tus credenciales o variables de entorno)
const pool = new Pool({
    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE_BD,
    port: process.env.PORT_BD
})

const getUnidadesMedida = async (req, res = response) => {
    try {
        // Ejecutamos la consulta
        const result = await pool.query('SELECT * FROM unidad_medida ORDER BY id ASC');

        res.json({
            ok: true,
            unidades: result.rows
        });
    } catch (error) {
        console.error('Error en getUnidadesMedida:', error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
};

module.exports = {
    getUnidadesMedida
};