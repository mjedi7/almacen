const { Pool } = require('pg');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = new Pool({

    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE_BD,
    port: process.env.PORT_BD
});

const getUserById = async(req, res) => {
    const email = req.params.email;
    const password = req.params.password;

    console.log(email);
    console.log(password);
    //  try {
    const response2 = await pool.query("select numempleado,usuario,usuarios.esactivo,nombre,usuarios.clave_area,usuarios.centro_trabajo,cat_direccion_area.nombre_completo,password,id_departamento,centro_trabajo_login.nombre_completo as nom_departamento,id_tipo_usuario " +
                                        "from usuarios "+
                                        "inner join cat_direccion_area on usuarios.clave_area=cast(cat_direccion_area.clave as integer) "+
                                        "inner join centro_trabajo_login on usuarios.id_departamento=id_centrotrabajo " +
                                        "WHERE usuarios.usuario = $1", [email]);

    if (response2.rowCount > 0) {

        var compare = bcryptjs.compareSync(password, response2.rows[0].password);

        let nombre = response2.rows[0].nombre;
        let correop = response2.rows[0].usuario;
        let numemp = response2.rows[0].numempleado;
        let area = response2.rows[0].clave_area;
        let nombreArea = response2.rows[0].nombre_completo;
        let nom_departamento = response2.rows[0].nom_departamento;
        let id_departamento=response2.rows[0].id_departamento; 
        let tipo_usuario=response2.rows[0].id_tipo_usuario;
        let centro_trabajo=response2.rows[0].centro_trabajo;

        if (compare) { 
            jwt.sign({ email }, process.env.LLAVE, { expiresIn: "12h" }, (err, token) => {
                res.status(200).json({ token, nombre, numemp, correop,area,nombreArea,nom_departamento, id_departamento,tipo_usuario, centro_trabajo });
            });

        } else {
            res.json("NoEncontrado");  
        }
    } else {
        res.json("NoEncontrado");
    }
};


const actualizarPassword = async(req, res) => {
    const email = req.params.email;
    const password = req.params.password;

    let passwordEncriptado = await bcryptjs.hash(password, 8);

    const usuarioRegistrado = await pool.query('SELECT usuario FROM usuarios WHERE usuario= $1;', [email]);

    if (usuarioRegistrado.rowCount > 0) {
        console.log("Existe");
        const response = await pool.query('update usuarios set password=$1 where usuario=$2', [passwordEncriptado, email]);
        res.json("Actualizado");
    } else {
        res.json("NoAgregado");
        console.log("No Existe");
    }

};


const agregarUsuario = async(req, res) => {

    console.log(req.body);

    var {
        nombre,
        usuario,
        password,
        numempleado,
        area,
        clave_area,
        esactivo
    } = req.body;

     let passwordEncriptado = await bcryptjs.hash(password, 8);

    try {
        var response = await pool.query('INSERT INTO usuarios(numempleado,usuario,password,esactivo,nombre,clave_area) VALUES ($1, $2, $3, $4, $5, $6)',
             [numempleado, usuario, passwordEncriptado,esactivo,nombre,clave_area]);

            if(response){

                res.json("Registrado");     
             }else{
                res.json("Error");   
             }

    } catch (error) {
        console.log("Error: " + error);
    }

    // const email = req.params.email;
    // const password = req.params.password;

    // let passwordEncriptado = await bcryptjs.hash(password, 8);

    // const usuarioRegistrado = await pool.query('SELECT email FROM usuarios WHERE email= $1;', [email]);

    // if (usuarioRegistrado.rowCount > 0) {
    //     console.log("Existe");
    //     const response = await pool.query('update usuarios set password=$1 where email=$2', [passwordEncriptado, email]);
    //     res.json("Agregado");
    // } else {
    //     res.json("NoAgregado");
    //     console.log("No Existe");
    // }

};

module.exports = {
    getUserById,
    actualizarPassword,
    agregarUsuario

};