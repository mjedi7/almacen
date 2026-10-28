const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE_BD,
    port: process.env.PORT_BD
})


const validarJWT = async (req = request, res = response, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Acceso NEGADO, NO tienes autorizacion' });
    }

    try {
        // 1. Verificamos el token
        const payload = jwt.verify(token, process.env.LLAVE);
        const emailUsuario = payload.email;

        if (!emailUsuario) {
            return res.status(401).json({ message: 'Token no válido: falta el correo del usuario' });
        }

        // 2. Buscamos en la base de datos usando exactamente el nombre de tu columna (id_usuario)
        const userQuery = await pool.query(
            'SELECT id_usuario, nombre FROM usuarios WHERE usuario = $1', 
            [emailUsuario]
        );

        if (userQuery.rowCount === 0) {
            return res.status(401).json({ message: 'Usuario no encontrado en el sistema' });
        }

        const usuarioEncontrado = userQuery.rows[0];

        // 3. Inyectamos el ID real en req.usuario
        req.usuario = {
            id: usuarioEncontrado.id_usuario,
            nombre: usuarioEncontrado.nombre || 'Usuario Almacén'
        };

        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'token no valido' });
    }
}

module.exports = {
    validarJWT
}