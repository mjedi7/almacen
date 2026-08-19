const { Pool } = require('pg');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fs = require('fs');
const pool = new Pool({

    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE_BD,
    port: process.env.PORT_BD
});


const getPlantelRequisicion = async(req, res) => {

    const id_plantel = req.params.id_plantel;


    const traerPlantel = await pool.query('SELECT id,descripcion FROM centro_trabajo WHERE id= $1;', [id_plantel]);
    res.json(traerPlantel.rows);

};


const TramitarRequisicion = async(req, res) => {
    try {
        var { plantel, partida, idcosto, fecha, cantidadSolicitar, consecutivo, nombreProducto } = req.body;

        const BuscarDuplicado = await pool.query(
            'SELECT folio_solicitud, id_costos FROM solicitud_material WHERE folio_solicitud = $1 AND id_costos = $2 AND id_centrotrabajo_solicitante = $3;',
            [consecutivo, idcosto, plantel]
        );
        
        if (BuscarDuplicado.rowCount > 0) {
            return res.json("Duplicado");
        }

        console.log(req.body);

        // Buscar el producto en almacen
        const response = await pool.query('SELECT nombre_producto FROM almacen WHERE id_costos = $1 LIMIT 1;', [idcosto]);
        
        // Si existe en almacen toma su nombre, si no, usa el que viene en la petición o un texto por defecto
        const nom_producto = response.rows.length > 0 ? response.rows[0].nombre_producto : (nombreProducto || 'Artículo sin nombre');

        await pool.query(
            'INSERT INTO solicitud_material(folio_solicitud, id_centrotrabajo_solicitante, fecha_solicitud, esactivo, esautorizado, id_costos, cantidad_solicitada, nom_articulo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            [consecutivo, plantel, fecha, true, true, idcosto, cantidadSolicitar, nom_producto]
        );

        return res.json("Add");

    } catch (error) {
        console.error("Error al tramitar requisicion:", error);
        return res.status(500).json("ErrorProducto");
    }
};


const TramitarRequisicionPlantel = async(req, res) => {

    try {

          var { plantel,producto,stockDisponible,cantidadSolicitar,fecha,nombreSolicitante,consecutivo,idcosto,existenciaFinal,descripcion,nomAutoriza} = req.body;

          existenciaFinal=parseInt(stockDisponible-cantidadSolicitar);


     const BuscarDuplicado = await pool.query('SELECT folio_solicitud,id_costos FROM movimientosplantel WHERE folio_solicitud= $1 and id_costos=$2 and id_centrotrabajo=$3;', [consecutivo,idcosto,plantel]);
    
     if(BuscarDuplicado.rowCount > 0){
                res.json("Duplicado");
     }else{

           console.log(req.body);  
           
             const traerIdPartida = await pool.query('SELECT id_partidas ' +
                                                        ' FROM almacen al ' +
                                                        ' INNER JOIN costos c ' +
                                                         ' ON al.id_costos = c.id ' +
                                                        ' INNER JOIN cat_articulos ca ' +
                                                         'ON c.id_articulo = ca.id ' +
                                                          ' where id_costos=$1 and id_centrotrabajo=$2;', [idcosto,plantel]);

                var idPartida=traerIdPartida.rows[0].id_partidas;    
                
                if(traerIdPartida){

                var response2 = await pool.query(' INSERT INTO movimientosplantel(id_costos,existencia_inicial,num_articulos_solicitados,existencia_final,fecha,nombre_solicita,descripcion,nombre_autoriza,id_centrotrabajo,folio_solicitud,id_partida,producto) VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9,$10,$11,$12)',
                [ idcosto,stockDisponible,cantidadSolicitar,existenciaFinal,fecha,nombreSolicitante,descripcion,nomAutoriza,plantel,consecutivo,idPartida,producto]);         

                res.json("Add");  

                }      
     }
     
    } catch (error) {
        console.log(error);

        res.json("ErrorProducto");
        
    }

};

const subirComentario = async(req, res) => {

    var { comentario,fechaComentarioPlantel} = req.body;
    var folio=req.params.folio;
    var cts=req.params.cts;

    if(fechaComentarioPlantel=='' || fechaComentarioPlantel== null){

        // Actualiza cuando es dg
         const actualizarCampoComentario = await pool.query('UPDATE solicitud_material SET comentario_dg=$1 WHERE folio_solicitud=$2 and id_centrotrabajo_solicitante=$3', [
                    comentario,
                    folio,
                    cts

                ]);

                res.json("Actualizado");
    }else{

        // Actualiza cuando es plantel
        console.log("Entro a comentario para Plantel")
         const actualizarCampoComentario = await pool.query('UPDATE solicitud_material SET comentario_plantel=$1,fecha_comentario_plantel=$2 WHERE folio_solicitud=$3 and id_centrotrabajo_solicitante=$4', [
                    comentario,
                    fechaComentarioPlantel,
                    folio,
                    cts
                ]);

                res.json("Actualizado");

    }


};


const getListaArticulosRequisicion= async(req, res) => {

    var folio=req.params.folio
    var id_plantel=req.params.plantel

    const response = await pool.query('SELECT * from solicitud_material where folio_solicitud='+folio+' and id_centrotrabajo_solicitante='+id_plantel);
    res.status(200).json(response.rows);                                                              

};

const getListaArticulosRequisicionPlantel= async(req, res) => {

    console.log("Llego a obtener lista")

    var folio=req.params.folio
    var id_plantel=req.params.plantel

    const response = await pool.query('SELECT * from movimientosplantel where folio_solicitud='+folio+' and id_centrotrabajo='+id_plantel);
    res.status(200).json(response.rows);                                                              

};


const eliminarArticuloRequisicion= async(req, res) => {

    var idarticulo=req.params.idarticulo

    const response = await pool.query('delete from solicitud_material where id='+idarticulo);
    res.json("Deleted");
    
};

const eliminarArticuloRequisicionPlantel= async(req, res) => {

    var idarticulo=req.params.idarticulo

    const response = await pool.query('delete from movimientosplantel where id='+idarticulo);
    res.json("Deleted");
    
};

const getRequisicionesPendientes= async(req, res) => {

    var plantel=req.params.plantel
    console.log("***"+plantel)

    if(plantel==47){
        
    const response = await pool.query('select distinct on (folio_solicitud,id_centrotrabajo_solicitante) solicitud_material.id,folio_solicitud,fecha_solicitud,status,ruta,con_url,sin_url,ruta_dg,con_url_dg,sin_url_dg,id_centrotrabajo_solicitante,descripcion as plantel,comentario_plantel,comentario_dg from solicitud_material ' +
' inner join centro_trabajo on solicitud_material.id_centrotrabajo_solicitante = centro_trabajo.codigo ORDER BY id_centrotrabajo_solicitante ASC;');
    res.json(response.rows);
    

    }else{

        console.log("else "+plantel)
  
    // const response = await pool.query('select distinct on (folio_solicitud,id_centrotrabajo_solicitante) solicitud_material.id,folio_solicitud,fecha_solicitud,status,ruta,con_url,sin_url,ruta_dg,con_url_dg,sin_url_dg,id_centrotrabajo_solicitante,descripcion as plantel, comentario_plantel,comentario_dg from solicitud_material ' + 
    //      ' inner join centro_trabajo on solicitud_material.id_centrotrabajo_solicitante = centro_trabajo.id ' +
    //     ' where id_centrotrabajo_solicitante='+plantel+ 'ORDER BY id_centrotrabajo_solicitante ASC;');

       const response = await pool.query('	select distinct on (folio_solicitud,id_centrotrabajo_solicitante) solicitud_material.id,folio_solicitud,fecha_solicitud,status,ruta,con_url,sin_url,ruta_dg,con_url_dg,sin_url_dg,id_centrotrabajo_solicitante,descripcion as plantel, comentario_plantel,comentario_dg, ' + 
    
    '(CASE ' +
    'when (extract(DOW from solicitud_material.fecha_comentario_plantel) ) = 6 then ' +
            'case when (solicitud_material.fecha_comentario_plantel + 7) > current_date then TRUE ' +
            'else FALSE ' +
            'END ' +        
      'when (extract(DOW from solicitud_material.fecha_comentario_plantel) ) = 0 then ' +
            'case when (solicitud_material.fecha_comentario_plantel + 6) > current_date then TRUE ' +
            'else FALSE ' +
            'END ' +   
     'else ' + 
            'case when (solicitud_material.fecha_comentario_plantel + 8) > current_date then TRUE ' +
            'else FALSE ' +
            'END ' +                             
    'END) AS en_tiempo ' +
    'from solicitud_material ' + 
    'inner join centro_trabajo on solicitud_material.id_centrotrabajo_solicitante = centro_trabajo.id ' +
    'where id_centrotrabajo_solicitante='+plantel+'  ORDER BY id_centrotrabajo_solicitante ASC;');



    res.json(response.rows);
    
    }


};


const abrirDocumento= async(req, res) => {

    var url=req.params.ruta

    console.log("*** "+url)

      const search = '-';
    const replacer = new RegExp(search, 'g');
    var newUrl = url.replace(replacer, '/');

       try {

        fs.readdir(newUrl, function(err, archivos) {
            if (err) {

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


    console.log(newUrl);
    
};


const abrirDocumentoDG= async(req, res) => {

    var url=req.params.ruta

    const search = '-';
    const replacer = new RegExp(search, 'g');
    var newUrl = url.replace(replacer, '/');

       try {

        fs.readdir(newUrl, function(err, archivos) {
            if (err) {

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


    console.log(newUrl);
    
};


const abrirDocumentoPlantel= async(req, res) => {

    var url=req.params.ruta

    console.log("*** "+url);
    console.log("llego a sbrir plantel")

      const search = '-';
    const replacer = new RegExp(search, 'g');
    var newUrl = url.replace(replacer, '/');

       try {

        fs.readdir(newUrl, function(err, archivos) {
            if (err) {

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


    console.log(newUrl);
    
};



module.exports = {

    getPlantelRequisicion,
    TramitarRequisicion,
    TramitarRequisicionPlantel,
    getListaArticulosRequisicion,
    getListaArticulosRequisicionPlantel,
    eliminarArticuloRequisicion,
    eliminarArticuloRequisicionPlantel,
    getRequisicionesPendientes,
    abrirDocumento,
    abrirDocumentoDG,
    abrirDocumentoPlantel,
    subirComentario
  

};