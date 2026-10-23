const { response } = require('express');
const { Pool } = require('pg');
const bcryptjs = require('bcryptjs');
var fs = require('fs');



const pool = new Pool({
    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE_BD,
    port: process.env.PORT_BD
})


// jasper = require('node-jasper')({
//     path: '../../lib/jasperreports-6.19.1',
//     reports: {
//         credencialTemporal: {
//             jasper: '../../reports/credencialTemporal/credencialTemporal.jasper'
//         },
//         credencialTemporalGrupo: {
//             jasper: '../../reports/credencialTemporalGrupo.jasper'
//         },

//         redi: {
//             jasper: '../../reports/Redi.jasper'
//         },
//         lista_de_alumnos: {
//             jasper: '../../reports/Disenolistaalumnos.jasper'
//         },
//         acta_de_calificacion: {
//             jasper: '../../reports/Acta_calificaciones_Ordinaria.jasper'
//         },
//         acta_de_submodulos: {
//             jasper: '../../reports/Acta_de_calificaciones_de_submodulos.jasper'
//         },
//         lista_de_alumnos_reprobados_en_ordinario: {
//             jasper: '../../reports/Lista_de_alumnos_reprobados_ordinario.jasper'
//         },
//         acta_de_calificaciones_extracurricular: {
//             jasper: '../../reports/Acta_calificaciones.jasper'
//         },
//         Lista_de_alumnos_reporbados_extraordinario: {
//             jasper: '../../reports/Lista_de_alumnos_reporbados_extraordinario.jasper'
//         },
//         lista_de_alumnos_reprobados_intersemestral: {
//             jasper: '../../reports/lista_de_alumnos_reprobados_intersemestral.jasper'
//         },
//         acta_de_calificacion_anterior: {
//             jasper: '../../reports/Acta_calificaciones_Anterior.jasper'
//         },
//         acta_de_submodulos_anterior: {
//             jasper: '../../reports/Acta_de_calificaciones_de_subAnteriores.jasper'
//         },
//         boleta_anterior: {
//             jasper: '../../reports/boleta.jasper'
//         },
//         boleta_anteriorRNP: {
//             jasper: '../../reports/boletaRNP.jasper'
//         },
//         boleta_anteriorRP: {
//             jasper: '../../reports/boletaRP.jasper'
//         },
//         historial: {
//             jasper: '../../reports/historialacademico.jasper'
//         },
//         constancia: {
//             jasper: '../../reports/constancia.jasper'
//         },
//         AutorizacionInscr: {
//             jasper: '../../reports/AutorizacionInscr.jasper'
//         },

//         arancelexamen: {
//             jasper: '../../reports/arancelexamen.jasper'
//         },
//         arancelpreinscripcion2: {
//             jasper: '../../reports/arancelpreinscripcion2.jasper'
//         },
//         AutorizacionReins: {
//             jasper: '../../reports/AutorizacionReins.jasper'
//         },
//         AutorizacionReinsRNP: {
//             jasper: '../../reports/AutorizacionReinsRNP.jasper'
//         },
//         arancelreinscripcion: {
//             jasper: '../../reports/arancelreinscripcion.jasper'
//         },
//         /////////////////////////2.3.3
//         AutorizacionReinsNoVigen: {
//             jasper: '../../reports/AutorizacionReinsNoVigen.jasper'
//         },
//         /////////////////////////2.3.5
//         acta_de_calificacion_nuevo_marco: {
//             jasper: '../../reports/Acta_calificaciones_Ordinaria_Nuevo_Marco.jasper'
//         },
//         lista_de_alumnosNo: {
//             jasper: '../../reports/ListaAsistenciaNo.jasper'
//         },
//         redi1: {
//             jasper: '../../reports/Redi1.jasper'
//         },

//         acta_de_calificacionExtra_nuevo_marco: {
//             jasper: '../../reports/Acta_calificacionesExtra_Ordinaria_Nuevo_Marco.jasper'
//         },
//         boleta_nuevomarco: {
//             jasper: '../../reports/boleta_nuevo_marco.jasper'
//         },
//     },
//     drivers: {
//         pg: {
//             path: '../../lib/postgresql-42.3.6.jar',
//             class: 'org.postgresql.Driver',
//             type: 'postgresql'
//         }
//     },
//     conns: {
//         dbserverCECyTEV: {
//             //Datos local
//             host: 'localhost',
//             port: 5432,
//             dbname: 'sigePruebaFina',
//             user: 'postgres',
//             pass: 'admin',
//             driver: 'pg'
//                 //Datos Finanzas
//                 // host: '10.1.40.81',
//                 // port: 5432,
//                 // dbname: 'sige',
//                 // user: 'usrsigebd',
//                 // pass: 'SIGEbd*2021!',
//                 // driver: 'pg'
//         }
//     },
//     defaultConn: 'dbserverCECyTEV'
// });
/////////////////////////////////////                          /////////////////////////////////////

const traerPartidas = async(req, res) => {

    const response = await pool.query('SELECT id,clave,descripcion FROM cat_partidas order by clave asc');
    res.status(200).json(response.rows);
    
};

const traerProductos = async(req, res) => {

    var id=req.params.id;
console.log(id)
    const response = await pool.query('SELECT * FROM cat_articulos where id_partidas='+id);
    res.status(200).json(response.rows);
    
};

const traerProductosDesdeTransferir = async(req, res) => {

    var id=req.params.id;
console.log(id)
    const response = await pool.query('SELECT nombre_producto,id_costos FROM almacen where id_partida='+id+' and id_centrotrabajo=47');
    res.status(200).json(response.rows);
    
};

const traerProductosDesdeUsarArticuloPlantel = async(req, res) => {

    var id=req.params.id;
    var plantel= req.params.plantel;

    console.log("el id es"+id);
    console.log("el plantel es"+plantel);

    const response = await pool.query('SELECT id,nombre_producto,id_costos FROM almacen where id_centrotrabajo='+plantel);
    res.status(200).json(response.rows);
    
};



const traerProveedores = async(req, res) => {

    const response = await pool.query('SELECT * FROM cat_proveedores');
    res.status(200).json(response.rows);
    
};

const datosDelProveedor = async(req, res) => {

    var id=req.params.id;

    const response = await pool.query('SELECT telefono,direccion FROM cat_proveedores where id='+id);
    res.status(200).json(response.rows);
    
};



const datosCostosArticulo = async(req, res) => {
    // Normalizamos el orden: primero articulo, luego proveedor (o según cómo esté tu ruta)
    // Para evitar confusiones con los nombres de req.params, leemos ambos posibles nombres:
    const idArticulo = req.params.idArticulo || req.params.idProducto;
    const idProveedor = req.params.idProveedor;

    // Si tu ruta está como /traerCostoArticulo/:param1/:param2:
    // param1 = 180 (artículo), param2 = 18 (proveedor)
    const param1 = Object.values(req.params)[0];
    const param2 = Object.values(req.params)[1];

    console.log(`Buscando costo -> id_articulo: ${param1}, id_proveedor: ${param2}`);

    try {
        const query = `
          SELECT precio_unitario 
          FROM costos 
          WHERE id_articulo = $1 AND id_proveedor = $2
          ORDER BY id DESC 
          LIMIT 1
        `;

        const response = await pool.query(query, [param1, param2]);

        if (response.rows.length > 0) {
            return res.status(200).json(response.rows[0].precio_unitario);
        } else {
            return res.json('ArticuloNoEncontrado');
        }
        
    } catch (error) {
        console.error('Error al consultar costo unitario:', error);
        return res.json('ArticuloNoEncontrado');
    }
};

const traerPlanteles = async(req, res) => {

    plantel=req.params.plantel

      if(plantel==47){

         const response = await pool.query('SELECT id,descripcion FROM centro_trabajo');
         res.status(200).json(response.rows);

    }else{

         const response = await pool.query('SELECT id,descripcion FROM centro_trabajo where id='+plantel);
    res.status(200).json(response.rows);

    }

   
    
};



const traerPlanteles2 = async(req, res) => {

         const response = await pool.query('SELECT id,descripcion FROM centro_trabajo');
         res.status(200).json(response.rows);
    
};


const traerTotalDisponible = async(req, res) => {

    var idArticulo=req.params.producto

           const response2 = await pool.query('SELECT existencias FROM almacen where id_costos='+idArticulo+ ' and id_centrotrabajo=47')
           res.status(200).json(response2.rows);
    
};


const traerConsecutivo = async(req, res) => {

    var idArticulo=req.params.producto

    const response = await pool.query('SELECT folio_transferencia from consecutivo');
    var consecutivo=response.rows[0].folio_transferencia + 1
    res.status(200).json(consecutivo);
    
};

const traerConsecutivoRequisicion = async(req, res) => {

    var id_plantel=req.params.id_plantel

    const response = await pool.query('SELECT folio_requisicion from consecutivo_requisicion where id_centrotrabajo='+id_plantel);
    var consecutivo=response.rows[0].folio_requisicion + 1

    res.status(200).json(consecutivo);
    
};

const traerConsecutivoUsarArticuloPlantel = async(req, res) => {

    console.log("**** llegox")

    var id_plantel=req.params.plantel
console.log("el plantel es" + id_plantel)
    const response = await pool.query('SELECT num_folio from consecutivo_usar_articulo_plantel where id_centrotrabajo='+id_plantel);
    if (response.rowCount ==0)
    {
        console.log("entro a undefined")
    }
    var consecutivo=response.rows[0].num_folio + 1
    console.log(consecutivo);
    res.status(200).json(consecutivo);
    
};


const traerDatosAdmin = async(req, res) => {

    var idPlantel=req.params.idPlantel

    const response = await pool.query('SELECT id,administrativo from centro_trabajo where id='+idPlantel);
    res.status(200).json(response.rows);
    
};












const traerDepartamentos = async(req, res) => {

    const tipo=req.params.areaSelect;

    const response = await pool.query('SELECT id_centrotrabajo,clave,nombre_completo FROM centro_trabajo where clave=$1',[tipo]);
    res.status(200).json(response.rows);
};



const traerAreasLocales = async(req, res) => {

    const response = await pool.query("SELECT nombre_completo,clave FROM cat_direccion_area where tipo='Interno'");
    res.status(200).json(response.rows); 
};

const traerAreasLocalesGrafica = async(req, res) => {

    var direccion=req.params.direccion;
    var permiso=req.params.permiso;

    if(permiso==1){

    console.log("Permiso 1");

    const response = await pool.query("SELECT nombre_completo,clave FROM cat_direccion_area where id_direccion>=1 and id_direccion<=6");
    res.status(200).json(response.rows); 
  

    }else{

    console.log("Permiso 2");

    const response = await pool.query("SELECT nombre_completo,clave FROM cat_direccion_area where clave='"+direccion+"'");
    res.status(200).json(response.rows); 

    }

 
};


const getSeguimientos = async(req, res) => {

    var clave_area=req.params.clave_area;
    var clave_departamento=req.params.clave_departamento;
    var permiso=req.params.permiso;

    if(permiso==1 ){   // Director General
        // console.log("-----"+clave_area);
        // const response = await pool.query("SELECT * FROM documentos_generados where area_que_emite="+clave_area);
        // res.status(200).json(response.rows);

        if(clave_area == 99){
            const response = await pool.query("Select * from documentos_generados where area_que_emite = 99 or area_que_emite = 93 or area_que_emite = 92 or area_que_emite = 91");
            res.status(200).json(response.rows);
        }
        else{
            const response = await pool.query("Select d.*,a.clave, a.nombre_completo" +
                " from documentos_generados d" +
                " Inner join cat_direccion_area a ON (d.area_que_emite = cast(a.clave as INTEGER))" +
                " where d.area_que_emite ="+clave_area+" order by folio_unico desc");
            res.status(200).json(response.rows);

            }

    }else if(permiso==2){ // Director de Direccion
        console.log("-----"+clave_area);
        const response = await pool.query("SELECT * FROM documentos_generados where area_que_emite="+clave_area+" order by folio_unico desc");
        res.status(200).json(response.rows);
    }else if(permiso==3){ // Jefe de departamento
        console.log("-----"+clave_area);
        const response = await pool.query("SELECT * FROM documentos_generados where area_que_emite="+clave_area+" and departamento_emite="+clave_departamento+" order by folio_unico desc");
        res.status(200).json(response.rows);
    }else if(permiso==4){
        // console.log("-----"+clave_area);
        // const response = await pool.query("SELECT * FROM documentos_generados where area_que_emite="+clave_area+" order by folio_unico desc");
        // res.status(200).json(response.rows);

        if(clave_area == 99){
            console.log("Entro al if de clave 99");
            const response = await pool.query("Select d.*,a.clave, a.nombre_completo " +
                "from documentos_generados d " +
                "Inner join cat_direccion_area a ON (d.area_que_emite = cast(a.clave as INTEGER)) " +
                "WHERE area_que_emite = 99 or area_que_emite = 93 or area_que_emite = 92 or area_que_emite = 91 "+
                "order by folio_unico desc");
                res.status(200).json(response.rows);
        }
        else{
            const response = await pool.query("Select d.*,a.clave, a.nombre_completo" +
                                           " from documentos_generados d" +
                                           " Inner join cat_direccion_area a ON (d.area_que_emite = cast(a.clave as INTEGER))" +
                                           " where d.area_que_emite ="+clave_area+" order by folio_unico desc");
            res.status(200).json(response.rows);
        }
    }

 
};

const getDocPorContestar = async(req, res) => {

    var clave_area=req.params.clave_area;
    var clave_departamento=req.params.clave_departamento;
    var permiso=req.params.permiso;


    if(permiso==1 ){   // Director General


        if(clave_area == 99){
            const response = await pool.query("Select d.*,a.clave, a.nombre_completo " +
                                                "from documentos_generados d " +
                                                "Inner join cat_direccion_area a ON (d.area_que_emite = cast(a.clave as INTEGER)) " +
                                                "WHERE area_turnada = 99 or area_turnada = 93 or area_turnada = 92 or area_turnada = 91 " +
                                                "order by folio_unico desc "); 
            res.status(200).json(response.rows);
            }
            else{
                const response = await pool.query("Select d.*,a.clave, a.nombre_completo" +
                    " from documentos_generados d" +
                    " Inner join cat_direccion_area a ON (d.area_que_emite = cast(a.clave as INTEGER))" +
                    " where d.area_turnada ="+clave_area+" order by folio_unico desc");
                res.status(200).json(response.rows);
            }

     
        // const response = await pool.query("Select d.*,a.clave, a.nombre_completo" +
        //                                    " from documentos_generados d" +
        //                                    " Inner join cat_direccion_area a ON (d.area_que_emite = cast(a.clave as INTEGER))" +
        //                                    " order by folio_unico desc");
        // res.status(200).json(response.rows);

    }else if(permiso==2){ // Director de Direccion

        // const response = await pool.query("SELECT * FROM documentos_generados where area_turnada="+clave_area+" order by folio_unico desc");
        // res.status(200).json(response.rows);

         const response = await pool.query("Select d.*,a.clave, a.nombre_completo" +
                                           " from documentos_generados d" +
                                           " Inner join cat_direccion_area a ON (d.area_que_emite = cast(a.clave as INTEGER))" +
                                           " where d.area_turnada ="+clave_area+" order by folio_unico desc");
            res.status(200).json(response.rows);
       
    }else if(permiso==3){ // Jefe de departamento
        const response = await pool.query("Select d.*,a.clave, a.nombre_completo" +
                                           " from documentos_generados d" +
                                           " Inner join cat_direccion_area a ON (d.area_que_emite = cast(a.clave as INTEGER))" +
                                           " where d.area_turnada ="+clave_area+" and id_departamento_turnado="+clave_departamento+" order by folio_unico desc");
        res.status(200).json(response.rows);
 
    }else if(permiso==4){ // Secretaria
        // const response = await pool.query("Select d.*,a.clave, a.nombre_completo" +
        //                                    " from documentos_generados d" +
        //                                    " Inner join cat_direccion_area a ON (d.area_que_emite = cast(a.clave as INTEGER))" +
        //                                    " where d.area_turnada ="+clave_area+" order by folio_unico desc");
        // res.status(200).json(response.rows);



        if(clave_area == 99){
            const response = await pool.query("Select d.*,a.clave, a.nombre_completo " +
                "from documentos_generados d " +
                "Inner join cat_direccion_area a ON (d.area_que_emite = cast(a.clave as INTEGER)) " +
                "WHERE area_turnada = 99 or area_turnada = 93 or area_turnada = 92 or area_turnada = 91 "+
                "order by folio_unico desc");
            res.status(200).json(response.rows);
        }
        else{
            const response = await pool.query("Select d.*,a.clave, a.nombre_completo" +
                                           " from documentos_generados d" +
                                           " Inner join cat_direccion_area a ON (d.area_que_emite = cast(a.clave as INTEGER))" +
                                           " where d.area_turnada ="+clave_area+" order by folio_unico desc");
            res.status(200).json(response.rows);
        }


    }


};

const traerNombreArchivo = async(req, res) => {

    const url = req.params.ruta;

    const search = '-';
    const replacer = new RegExp(search, 'g');
    var newUrl = url.replace(replacer, '/');

    try {

        fs.readdir(newUrl, function(err, archivos) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(archivos);
            // res.json(archivos);
            res.download(newUrl + "/" + archivos[0]);
            console.log("----" + newUrl + "/" + archivos);
        }); 



    } catch (error) {
        console.log(error);

    }
    
};



const traerNombreArchivoRespuesta = async(req, res) => {

    const url = req.params.ruta;

    const search = '-';
    const replacer = new RegExp(search, 'g');
    var newUrl = url.replace(replacer, '/');

    try {

        fs.readdir(newUrl, function(err, archivos) {
            if (err) {
                console.log("xxxx:"+err);
                res.json("ErrorPDF");
                return;
            }else{
                console.log(archivos);
                res.download(newUrl + "/" + archivos[0]);
                console.log("----" + newUrl + "/" + archivos);

            }
        
        }); 



    } catch (error) {
        console.log(error);

    }
    
};


const getUsuarios = async(req, res) => {

    var centro_trabajo = req.params.area;

    const response = await pool.query(
        "select id_usuario,numempleado,usuario,nombre,clave_area,nombre_completo as nombrearea,usuarios.esactivo as activo " +
        "from usuarios " +
        "inner join cat_direccion_area on usuarios.clave_area=cast(cat_direccion_area.clave as integer) " +
        "where centro_trabajo=" + centro_trabajo
    );

    res.status(200).json(response.rows);
};


const getTodosUsuarios = async(req, res) => {

    const resultadoUsuarios = await pool.query(`
        select
            id_usuario,
            numempleado,
            usuario,
            nombre,
            clave_area,
            nombre_completo as nombrearea,
            usuarios.esactivo as activo
        from usuarios
        inner join cat_direccion_area
            on usuarios.clave_area = cast(cat_direccion_area.clave as integer)
        order by id_usuario
    `);

    res.status(200).json(resultadoUsuarios.rows);
};

// const getAreaEmite = async(req, res) => {

//     var clave_area=req.params.clave_area;
//     // var claveString=clave_area.toString();

//     const response = await pool.query("select nombre_completo from cat_direccion_area where clave='"+clave_area+"'");
//     res.status(200).json(response.rows);
// };


const getEstadisticaAtendidos = async(req, res) => {

    var clave_area=req.params.area;
    var id_dpto=req.params.id_departamento;
    var permiso=req.params.permiso;

    if(permiso==2 || permiso==4){
        const response = await pool.query("select * from documentos_generados where area_turnada="+clave_area+" and estatus='Atendido'");
        var totalAtendidos= parseInt((response.rowCount));
        res.json(totalAtendidos);           
    }else{
       
        const response = await pool.query("select * from documentos_generados where area_turnada="+clave_area+" and estatus='Atendido' and id_departamento_turnado="+id_dpto);
        var totalAtendidos= parseInt((response.rowCount));
        res.json(totalAtendidos); 

    }
  
};


const traerTotalAtendidosEnviados= async(req, res)=> {

        var clave_area=req.params.area;
    var id_dpto=req.params.id_departamento;
    var permiso=req.params.permiso;

    console.log(""+clave_area+"*************");

    if(permiso==2 || permiso==4){
        const response = await pool.query("select count (id) from documentos_generados where area_que_emite="+clave_area+" and estatus='Atendido'");
        var totalAtendidosEnviados= parseInt((response.rows[0].count));

        console.log(response.rows[0].count)

        res.json(totalAtendidosEnviados);           
    }
       
    else{
       
        const response = await pool.query("select count (id) from documentos_generados where departamento_emite="+id_dpto+" and estatus='Atendido'");
        var totalAtendidosEnviados= parseInt((response.rows[0].count));
        res.json(totalAtendidosEnviados); 

    }
    
}


const traerTotalProcesoEnviados= async(req, res)=> {

        var clave_area=req.params.area;
    var id_dpto=req.params.id_departamento;
    var permiso=req.params.permiso;

    console.log(""+clave_area+"*************");

    if(permiso==2 || permiso==4){
        const response = await pool.query("select count (id) from documentos_generados where area_que_emite="+clave_area+" and estatus='En proceso'");
        var totalProcesoEnviados= parseInt((response.rows[0].count));

        console.log(response.rows[0].count)

        res.json(totalProcesoEnviados); 

    }else{
       
        const response = await pool.query("select count (id) from documentos_generados where departamento_emite="+id_dpto+" and estatus='En proceso'");
        var totalProcesoEnviados= parseInt((response.rowCount));
        res.json(totalProcesoEnviados); 

    }
    
}



const traerTotalSinAtenderEnviados= async(req, res)=> {

        var clave_area=req.params.area;
    var id_dpto=req.params.id_departamento;
    var permiso=req.params.permiso;

    console.log(""+clave_area+"*************");

    if(permiso==2 || permiso==4){
        const response = await pool.query("select count (id) from documentos_generados where area_que_emite="+clave_area+" and estatus='Sin atender'");
        var totalSinAtenderEnviados= parseInt((response.rows[0].count));

        console.log(response.rows[0].count)

        res.json(totalSinAtenderEnviados);           
    }else{
       
        const response = await pool.query("select count (id) from documentos_generados where departamento_emite="+id_dpto+" and estatus='Sin atender'");
        var totalSinAtender= parseInt((response.rows[0].count));
        res.json(totalSinAtender); 

    }
    
}


const getEstadisticaProceso = async(req, res) => {

    var clave_area=req.params.area;
    var id_dpto=req.params.id_departamento;
    var permiso=req.params.permiso;

   if(permiso==2 || permiso==4){

            const response = await pool.query("select * from documentos_generados where area_turnada="+clave_area+" and estatus='En proceso'");
            var totalProceso= parseInt((response.rowCount));
            console.log(totalProceso);
            res.json(totalProceso); 

   }else{
            const response = await pool.query("select * from documentos_generados where area_turnada="+clave_area+" and estatus='En proceso' and id_departamento_turnado="+id_dpto);
            var totalProceso= parseInt((response.rowCount));
            console.log(totalProceso);
            res.json(totalProceso); 
   }


  
};


const getEstadisticaNoAtendido = async(req, res) => {

    var clave_area=req.params.clave_area;

};

const getEstadisticaGenerados = async(req, res) => {

    var clave_area=req.params.area;
    var id_dpto=req.params.id_departamento;
    var permiso=req.params.permiso;

    if(permiso==2 || permiso==4){
        const response = await pool.query("select * from documentos_generados where area_que_emite="+clave_area);
        var totalGenerados= parseInt((response.rowCount));
        res.json(totalGenerados); 

    }else{
        const response = await pool.query("select * from documentos_generados where area_que_emite="+clave_area+" and departamento_emite="+id_dpto);
        var totalGenerados= parseInt((response.rowCount));
        res.json(totalGenerados); 

    }



};

const getDatosEstadisticos = async(req, res) => {

    var area=req.params.area

    console.log("Area: "+area);

    if(area==99){

        const response = await pool.query("Select ct.id_centrotrabajo, ct.nombre_completo," + 
   " sum(CASE WHEN dg.estatus = 'Sin atender' THEN 1 else 0 END) AS sin_atender, " +
   " sum(CASE WHEN dg.estatus = 'En proceso' THEN 1 else 0 END) AS en_proceso, " + 
   " sum(CASE WHEN dg.estatus = 'Atendido' THEN 1 else 0 END) AS atendido, " + 
   " (select count(id) from documentos_generados where departamento_emite = ct.id_centrotrabajo and tipo_atencion like 'Para su atención') as emitidos_atencion, " + 
   " (select count(id) from documentos_generados where departamento_emite = ct.id_centrotrabajo and tipo_atencion like 'Para su conocimiento') as emitidos_conocimiento, " + 
   " (select count(id) from documentos_generados where departamento_emite = ct.id_centrotrabajo and tipo_atencion like 'Respuesta') as emitidos_respuesta " + 
   " from documentos_generados dg " + 
   " RIGHT join centro_trabajo ct ON (dg.id_departamento_turnado = ct.id_centrotrabajo) " + 
   " WHERE ct.id_numemp_titular is not  NULL and " + 
   " ( ct.clave = cast(99 as varchar) or ct.clave = cast(93 as varchar) or ct.clave = cast(92 as varchar) or ct.clave = cast(91 as varchar)) " +
   " GROUP BY ct.nombre_completo  , ct.id_centrotrabajo " + 
   " Order by ct.clave, ct.id_centrotrabajo");

   res.status(200).json(response.rows);


    }else{

        const response = await pool.query("Select ct.id_centrotrabajo, ct.nombre_completo, " +
            " sum(CASE WHEN dg.estatus = 'Sin atender' THEN 1 else 0 END) AS sin_atender, " +
            " sum(CASE WHEN dg.estatus = 'En proceso' THEN 1 else 0 END) AS en_proceso, " +
            " sum(CASE WHEN dg.estatus = 'Atendido' THEN 1 else 0 END) AS atendido, " +
            " (select count(id) from documentos_generados where departamento_emite = ct.id_centrotrabajo and tipo_atencion like 'Para su atención') as emitidos_atencion, " +
            " (select count(id) from documentos_generados where departamento_emite = ct.id_centrotrabajo and tipo_atencion like 'Para su conocimiento') as emitidos_conocimiento, " +
            " (select count(id) from documentos_generados where departamento_emite = ct.id_centrotrabajo and tipo_atencion like 'Respuesta') as emitidos_respuesta " +
            " from documentos_generados dg " +
            " RIGHT join centro_trabajo ct ON (dg.id_departamento_turnado = ct.id_centrotrabajo) " +
            " WHERE ct.id_numemp_titular is not  NULL and " +
            " ct.clave = cast("+area+" as varchar) " +
            " GROUP BY ct.nombre_completo  , ct.id_centrotrabajo " + 
            " Order by ct.clave, ct.id_centrotrabajo");
          
              res.status(200).json(response.rows);


    }

};

const getTotales = async(req, res) => {

    var area=req.params.area;

//     const response = await pool.query("Select   estados_atencion.estatus, coalesce(count(documentos_generados.estatus)) as total " +
// " from documentos_generados " + 
// " right join cat_direccion_area ON (cat_direccion_area.clave = cast(documentos_generados.area_turnada AS varchar)) " +
// " inner join estados_atencion ON (estados_atencion.estatus = documentos_generados.estatus) " +
// " where cat_direccion_area.tipo_limite = 0 and documentos_generados.area_turnada = "+area+" " +
// " group by estados_atencion.estatus");

if(area==99){

    const responseX1 = await pool.query("select COALESCE(count(id),0) as atendido from documentos_generados where estatus= 'Atendido' and (area_turnada=99 or area_turnada=93 or area_turnada=92 or area_turnada=91 or area_turnada=90)");
    const responseX2 = await pool.query("select COALESCE(count(id),0) as proceso from documentos_generados where estatus= 'En proceso' and (area_turnada=99 or area_turnada=93 or area_turnada=92 or area_turnada=91 or area_turnada=90)");
    const responseX3 = await pool.query("select COALESCE(count(id),0) as sinatender from documentos_generados where estatus= 'Sin atender' and (area_turnada=99 or area_turnada=93 or area_turnada=92 or area_turnada=91 or area_turnada=90)");
   
   var arreglo=[];
   
   arreglo.push(responseX1.rows[0].atendido);
   arreglo.push(responseX2.rows[0].proceso);
   arreglo.push(responseX3.rows[0].sinatender);
   
   res.status(200).json(arreglo);


}else{

    const responseX1 = await pool.query("select COALESCE(count(id),0) as atendido from documentos_generados where estatus= 'Atendido' and area_turnada="+area);
    const responseX2 = await pool.query("select COALESCE(count(id),0) as proceso from documentos_generados where estatus= 'En proceso' and area_turnada="+area);
    const responseX3 = await pool.query("select COALESCE(count(id),0) as sinatender from documentos_generados where estatus= 'Sin atender' and area_turnada="+area);
   
   var arreglo=[];
   
   arreglo.push(responseX1.rows[0].atendido);
   arreglo.push(responseX2.rows[0].proceso);
   arreglo.push(responseX3.rows[0].sinatender);
   
   res.status(200).json(arreglo);

}



// const response = await pool.query("Select ct.id_centrotrabajo, ct.nombre_completo, " +
//   " sum(CASE WHEN dg.estatus = 'Sin atender' THEN 1 else 0 END) AS sin_atender, " +
//   " sum(CASE WHEN dg.estatus = 'En proceso' THEN 1 else 0 END) AS en_proceso, " +
//   " sum(CASE WHEN dg.estatus = 'Atendido' THEN 1 else 0 END) AS atendido, " +
//   " (select count(id) from documentos_generados where departamento_emite = ct.id_centrotrabajo and tipo_atencion like 'Para su atención') as emitidos_atencion, " +
//   " (select count(id) from documentos_generados where departamento_emite = ct.id_centrotrabajo and tipo_atencion like 'Para su conocimiento') as emitidos_conocimiento, " +
//   " (select count(id) from documentos_generados where departamento_emite = ct.id_centrotrabajo and tipo_atencion like 'Respuesta') as emitidos_respuesta " +
//   " from documentos_generados dg " +
//   " RIGHT join centro_trabajo ct ON (dg.id_departamento_turnado = ct.id_centrotrabajo) " +
//   " WHERE ct.id_numemp_titular is not  NULL and " +
//   " ct.clave = cast(94 as varchar) " +
//   " GROUP BY ct.nombre_completo  , ct.id_centrotrabajo " + 
//   " Order by ct.clave, ct.id_centrotrabajo" );
// res.status(200).json(response.rows);

};

const getDatosEditar = async(req, res) => {

    var id=req.params.id;

    // const response = await pool.query('Select tipo,area_que_emite as "areaQueEmite",tipo_atencion as "tipoAtencion",direccion_firmante as "direccionFirmante",persona_que_emite as "personaQueEmite",tipo_documento as "tipoDocumento",prioridad,referencia as "referenciaDocumento",asunto as "asuntoDocumento",fecha_documento as "fechaDocumento",fecha_limite_respuesta as "fechaLimiteRespuesta",area_turnada as "areaTunda",fecha_sello_recibido as "fechaRecepcion",resumen from documentos_generados where id='+id);
    const response= await pool.query('Select tipo, ' +

' (select cat_direccion_area.nombre_completo ' + 
'  from cat_direccion_area ' +
'  INNER JOIN documentos_generados ON cat_direccion_area.clave = cast(documentos_generados.area_que_emite as varchar) ' +
 ' where documentos_generados.folio_unico = d.folio_unico) as "areaQueEmiteX", ' +
 
' d.tipo_atencion as "tipoAtencion", ' +
' d.direccion_firmante as "direccionFirmante", ' +
' d.persona_que_emite as "personaQueEmite", ' +
' d.tipo_documento as "tipoDocumento", ' +
' d.prioridad,referencia as "referenciaDocumento", ' +
' d.asunto as "asuntoDocumento", ' +
' d.fecha_documento as "fechaDocumento", ' +
' d.fecha_limite_respuesta as "fechaLimiteRespuesta", ' +

' (select cat_direccion_area.nombre_completo ' + 
 ' from cat_direccion_area ' +
 ' INNER JOIN documentos_generados ON cat_direccion_area.clave = cast(documentos_generados.area_turnada as varchar) ' +
 ' where documentos_generados.folio_unico = d.folio_unico) as "areaTurnada", ' +
 
' d.fecha_sello_recibido as "fechaRecepcion", ' +

 ' (Select centro_trabajo.nombre_completo ' + 
 ' from centro_trabajo ' +
 ' INNER JOIN documentos_generados ON centro_trabajo.id_centrotrabajo =  documentos_generados.id_departamento_turnado ' + 
 ' where documentos_generados.folio_unico = d.folio_unico ) as "departamentoTurnado" , ' +
 
 ' (Select centro_trabajo.nombre_completo ' + 
 ' from centro_trabajo ' +
 ' INNER JOIN documentos_generados ON centro_trabajo.id_centrotrabajo =  documentos_generados.departamento_emite ' + 
 ' where documentos_generados.folio_unico = d.folio_unico)  as "departamentoEmite", ' +
 
' d.resumen from documentos_generados d ' +
'  where id= '+id)
    res.json(response.rows[0]);

};


const editarSeguimiento = async(req, res) => {

    console.log(req.body);
    var id=req.params.id

     const { tipo,areaQueEmite,tipoAtencion, direccionFirmante,tipoDocumento,prioridad,referenciaDocumento,asuntoDocumento,fechaDocumento,fechaRecepcion,fechaLimiteRespuesta,resumen} = req.body;


    const response = await pool.query('UPDATE documentos_generados SET tipo=$1, tipo_atencion=$2,direccion_firmante=$3,tipo_documento=$4,prioridad=$5,referencia=$6, asunto=$7,fecha_documento=$8,fecha_sello_recibido=$9,fecha_limite_respuesta=$10,resumen=$11 WHERE id=$12', [
        tipo,
        tipoAtencion,
        direccionFirmante,
        tipoDocumento,
        prioridad,
        referenciaDocumento,
        asuntoDocumento,
        fechaDocumento,
        fechaRecepcion,
        fechaLimiteRespuesta,
        resumen,
        id

    ]);

    if (response) {
        res.status(200).json("Editado");
    } else {
        res.status(200).json("Error");
    }

};


const getDeptosMultipleEnvio = async(req, res) => {

    var clave_area=req.params.idarea;

            const response = await pool.query("SELECT id_centrotrabajo,clave,nombre_completo FROM centro_trabajo where estodos is null and clave ='"+clave_area+"'");     
            res.json(response.rows); 
  
};

const getDireccionesMultipleEnvio = async(req, res) => {

            const response = await pool.query("select * from cat_direccion_area where cast(clave as integer) < 100");     
            res.json(response.rows); 
  
};

const cambiarPassword = async(req, res) => {


    console.log(req.body);

    var usuario=req.body.usuario;
    var pass=req.body.password;


    var fecha=new Date();

      
            let newData = "\n Usuario: "+usuario+"** Contraseña: "+pass+"** Última modificación: "+fecha;
            fs.appendFile('my_file.txt', newData, (err) => {

                if (err) throw err;
            })



    let passwordEncriptado = await bcryptjs.hash(pass, 8);

             const response = await pool.query("SELECT usuario FROM usuarios where usuario='"+usuario+"'");     
       
             if (response.rowCount > 0) {
                console.log("Existe");
                const response = await pool.query('update usuarios set password=$1 where usuario=$2', [passwordEncriptado, usuario]);
                res.json("Actualizado");
            } else {
                res.json("NoActualizado");
                console.log("No Existe");
            }
  
};


const traerDeptosPorDireccion = async(req, res) => {

    var idDireccion=req.params.idDireccion;

    console.log("**** "+idDireccion);

    
    const response = await pool.query("Select * from centro_trabajo where clave = $1 and (estodos is null or abreviatura = 'MAS')",[idDireccion]);
    res.status(200).json(response.rows);



}


 const traerDeptosPorDireccion2 = async(req, res) => {

    var idDireccion=req.params.idDireccion;

    console.log("**** "+idDireccion);

    
    const response = await pool.query("Select * from centro_trabajo where clave = $1 and estodos is null",[idDireccion]);
    res.status(200).json(response.rows);

 }


 const reenviarUnDepto = async(req, res) => {

    var idDocumento=req.params.idDocumento;
    console.log("**** "+idDocumento);

    let array=req.body;

    console.log("largo del array: "+array.length)

    console.log(req.body);

    const response2 = await pool.query("Select * from documentos_generados where id = $1",[idDocumento]);

    if(response2.rowCount>0){

         const response2x = await pool.query("Select * from documentos_generados where referencia = $1 and id_departamento_turnado=$2",[response2.rows[0].referencia,array[0]]);

         if(response2x.rowCount>0){
            console.log("No hizo nada");

         }else{


        if(response2.rows[0].reasignado==true && response2.rows[0].id_departamento_turnado==array[0]  ){
            
            console.log("No realizó la reasignación por que ya estaba reasignado");
        }else{

            const response = await pool.query('UPDATE documentos_generados SET id_departamento_turnado=$1,reasignado=true WHERE id=$2', [
                array[0],
                idDocumento
        
            ]);
        }

    }


    if (response) {
        res.status(200).json("Editado");
    } else {
        res.status(200).json("Error");
    }

    }
    }

const reenviarVariosDeptos = async(req, res) => {

    var idDocumento=req.params.idDocumento;
    var Areaturnada=req.params.areaTurnada;

    let array=req.body;

    const response2 = await pool.query("Select * from documentos_generados where id = $1",[idDocumento]);

    if(response2.rowCount>0){


        if(response2.rows[0].reasignado==true){
            console.log("No realizó la reasignación por que ya estaba reasignado");

        }else{

            const response = await pool.query('UPDATE documentos_generados SET id_departamento_turnado=$1,reasignado=true WHERE id=$2', [
                array[0],
                idDocumento
        
            ]);

        }

    }


     for(let i=1;i<array.length;i++){

            const responseX = await pool.query("Select * from documentos_generados where area_turnada= $1 and id_departamento_turnado=$2 and reasignado=true",[Areaturnada,array[i]]);
                
            if(responseX.rowCount>0){

                    console.log("No realizó la reasignación por que ya estaba reasignado");

            }else{


            var response3 = await pool.query(' INSERT INTO documentos_generados( tipo, area_que_emite,tipo_atencion,persona_que_emite,tipo_documento,prioridad,area_turnada,fecha_sello_recibido,id_departamento_turnado,departamento_emite,referencia,asunto,fecha_documento,fecha_limite_respuesta,resumen,url,estatus,direccion_firmante,fecha_registro,reasignado) VALUES ($1, $2, $3, $4, $5, $6, ' +
                '$7, $8, $9, $10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20) returning id as ultimoid; ', [response2.rows[0].tipo, response2.rows[0].area_que_emite, response2.rows[0].tipo_atencion, response2.rows[0].persona_que_emite, response2.rows[0].tipo_documento, response2.rows[0].prioridad, response2.rows[0].area_turnada,response2.rows[0].fecha_sello_recibido,array[i],response2.rows[0].departamento_emite,response2.rows[0].referencia,response2.rows[0].asunto,
                response2.rows[0].fecha_documento,response2.rows[0].fecha_limite_respuesta,response2.rows[0].resumen,response2.rows[0].url,response2.rows[0].estatus,response2.rows[0].direccion_firmante,response2.rows[0].fecha_registro,true
                ]);  
                
                
                var ultimoID = response3.rows[0].ultimoid;
    
                if(response3){
    
                const response4 = await pool.query("select * from  folios_unicos");
    
                if (response4.rowCount > 0) {
    
                     var incremento= parseInt(response4.rows[0].folio_unico) + 1;
                     const Fecha = new Date();
                     let anio = Fecha.getFullYear();
    
                     const response5 = await pool.query('UPDATE folios_unicos SET folio_unico=$1,anio=$2 WHERE (id=1)', [
                        incremento,
                        anio
                    ]);
    
                    const response6 = await pool.query('UPDATE documentos_generados SET folio_unico=$1 WHERE (id=$2)', [
                        incremento,
                        ultimoID
                    ]);
            
            
                } else {
                     res.json("NoEncontrado");
                }  
                    }

                }
    
         }

 res.json("Masivo");

}


const updateNoAtendidos = async(req, res) => {

    var claveDireccion=req.params.area;
    console.log(claveDireccion);

    try {
          
    const response = await pool.query("Update documentos_generados SET estatus = 'Sin atender' " + 
        " Where area_turnada = " +claveDireccion+" and (to_date(fecha_limite_respuesta, 'YYYY-MM-DD') < current_date AND estatus = 'En proceso') ");
    
         res.json("actualización hecha");
        
    } catch (error) {

        console.log(error);
        
    }

 }

 const conteoNoAtendidos = async(req, res) => {

    var claveDireccion=req.params.area;
    var id_departamento=req.params.id_departamento;
    var permiso=req.params.permiso;

    console.log("** "+claveDireccion);


      if(permiso==2 || permiso==4){

                try {
                        
                    const response = await pool.query("Select count(folio_unico) as conteo from documentos_generados " + 
                " where area_turnada = "+claveDireccion+" AND ((to_date(fecha_limite_respuesta, 'YYYY-MM-DD') < current_date AND estatus = 'En proceso') " +
                " or estatus = 'Sin atender')" );
                        
                console.log("= "+response.rows[0].conteo);
                        res.json(response.rows[0].conteo);
                        
                    } catch (error) {

                        console.log(error);
                        
                    }

    }else{


             try {
                        
                    const response = await pool.query("Select count(folio_unico) as conteo from documentos_generados " + 
                " where id_departamento_turnado = "+id_departamento+" AND ((to_date(fecha_limite_respuesta, 'YYYY-MM-DD') < current_date AND estatus = 'En proceso') " +
                " or estatus = 'Sin atender')" );
                        
                console.log("= "+response.rows[0].conteo);
                        res.json(response.rows[0].conteo);
                        
                    } catch (error) {

                        console.log(error);
                        
                    }
       
       
    }

}



module.exports = {
    traerPartidas,
    traerProductos,
    traerProductosDesdeTransferir,
    traerProductosDesdeUsarArticuloPlantel,
    traerProveedores,
   datosDelProveedor,
   traerPlanteles,
   traerTotalDisponible,
   traerConsecutivo,
   traerConsecutivoUsarArticuloPlantel,
   traerConsecutivoRequisicion,
   traerDatosAdmin,
   traerPlanteles2,
   datosCostosArticulo,


    traerAreasLocales,
    getSeguimientos,
    traerNombreArchivo,
    getUsuarios,
    getTodosUsuarios,
    getDocPorContestar,
    // getAreaEmite,
    traerNombreArchivoRespuesta,
    getEstadisticaAtendidos,
    getEstadisticaProceso,
    getEstadisticaNoAtendido,
    getEstadisticaGenerados,
    traerDepartamentos,
    getDatosEstadisticos,
    getTotales,
    getDatosEditar,
    editarSeguimiento,
    getDeptosMultipleEnvio,
    getDireccionesMultipleEnvio,
    cambiarPassword,
    traerDeptosPorDireccion,
    traerDeptosPorDireccion2,
    reenviarUnDepto,
    reenviarVariosDeptos,
    traerAreasLocalesGrafica,
    updateNoAtendidos,
    conteoNoAtendidos,
    traerTotalAtendidosEnviados,
    traerTotalProcesoEnviados,
     traerTotalSinAtenderEnviados
}