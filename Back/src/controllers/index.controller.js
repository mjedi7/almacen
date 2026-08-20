const { response } = require('express');
const { Pool } = require('pg');

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

const getAlumnos = async(req, res) => {
    const response = await pool.query('SELECT * FROM alumnos');
    res.status(200).json(response.rows);
};


/*const registrarStock = async(req, res) => {


    var { partida,producto,fechaAd,cantidad,unidad,descripcion,proveedor,telefono,direccion,costo,iva,total,folio,centro_trabajo,subTotal} = req.body;


    try {


        var comprobarDuplicado = await pool.query(' select * from costos where id_articulo='+producto+' and id_proveedor='+proveedor+' and precio_unitario='+costo);

      if(comprobarDuplicado.rowCount>0){

        res.json('Duplicado');

      }else{

    iva=16;
    
      var response1 = await pool.query(' select id,descripcion from cat_articulos where id='+producto);
      var nombreProducto=response1.rows[0].descripcion;
               

      var response = await pool.query(' INSERT INTO costos(id_articulo, id_proveedor,precio_unitario,iva,precio_total,fecha_inicio,esactivo) VALUES ($1, $2, $3, $4, $5, $6,$7) returning id as ultimoid; ',
                [producto,proveedor,costo,iva,total,fechaAd,true ]);  

                 var ultimoID = response.rows[0].ultimoid;
                
                if(response){

                var response2 = await pool.query(' INSERT INTO almacen(id_centrotrabajo,id_costos,existencias,fecha_adquisicion,esactivo,unidad,descripcion,id_partida,nombre_producto) VALUES ($1, $2, $3, $4, $5, $6,$7,$8,$9)',
                [ centro_trabajo,ultimoID,cantidad,fechaAd,true,unidad,descripcion, partida,nombreProducto]);  

                }else{
                    res.json("Error");
                }

                if(response2){

                     var response3 = await pool.query(' INSERT INTO compras(id_costo,total_articulos,fecha_compra,folio_compra,esactivo) VALUES ($1, $2, $3, $4, $5)',
                [ ultimoID,cantidad,fechaAd,folio,true]);  

                }


                const impuestoReal = (subTotal * 0.16);

                 await pool.query ('INSERT INTO compras_reportes (folio_factura, id_proveedor, fecha_compra, importe, impuesto, total, id_partida) VALUES ($1, $2, $3, $4, $5, $6, $7)', [folio, proveedor, fechaAd, subTotal, impuestoReal, total, partida]);



                res.json("Save");

            }

        
    } catch (error) {

        console.log(error);
        res.json("Error");
        
    }


};*/

const registrarStock = async(req, res) => {
    var { 
        partida,
        producto,
        fechaAd,
        cantidad,
        unidad,
        descripcion,
        proveedor,
        telefono,
        direccion,
        costo,
        iva,
        total,
        folio,
        centro_trabajo,
        subTotal
    } = req.body;

    // Aseguramos capturar la partida si viniera con cualquiera de los nombres
    var idPartida = partida || req.body.id_partidas;

    try {
        var comprobarDuplicado = await pool.query(
            'SELECT * FROM costos WHERE id_articulo = $1 AND id_proveedor = $2 AND precio_unitario = $3',
            [producto, proveedor, costo]
        );

        if (comprobarDuplicado.rowCount > 0) {
            return res.json('Duplicado');
        } else {
            iva = 16;

            var response1 = await pool.query(
                'SELECT id, descripcion FROM cat_articulos WHERE id = $1',
                [producto]
            );
            var nombreProducto = response1.rows[0].descripcion;

            var response = await pool.query(
                'INSERT INTO costos(id_articulo, id_proveedor, precio_unitario, iva, precio_total, fecha_inicio, esactivo) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id AS ultimoid;',
                [producto, proveedor, costo, iva, total, fechaAd, true]
            );

            var ultimoID = response.rows[0].ultimoid;

            if (response) {
                var response2 = await pool.query(
                    'INSERT INTO almacen(id_centrotrabajo, id_costos, existencias, fecha_adquisicion, esactivo, unidad, descripcion, id_partida, nombre_producto) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
                    [centro_trabajo, ultimoID, cantidad, fechaAd, true, unidad, descripcion, idPartida, nombreProducto]
                );
            } else {
                return res.json("Error");
            }

            if (response2) {
                // AQUÍ AGREGAMOS id_partidas Y EL PARÁMETRO $6 (idPartida)
                var response3 = await pool.query(
                    'INSERT INTO compras(id_costo, total_articulos, fecha_compra, folio_compra, esactivo, id_partidas) VALUES ($1, $2, $3, $4, $5, $6)',
                    [ultimoID, cantidad, fechaAd, folio, true, idPartida]
                );
            }

            const impuestoReal = (parseFloat(subTotal) * 0.16) || 0;

            await pool.query(
                'INSERT INTO compras_reportes (folio_factura, id_proveedor, fecha_compra, importe, impuesto, total, id_partida) VALUES ($1, $2, $3, $4, $5, $6, $7)',
                [folio, proveedor, fechaAd, subTotal, impuestoReal, total, idPartida]
            );

            return res.json("Save");
        }
    } catch (error) {
        console.log(error);
        return res.json("Error");
    }
};



const transferirArticulosPlantel = async(req, res) => {


    var { plantel,partida,idcosto,fecha,cantidadEnStock,cantidadTransferir,consecutivo,autorizo,recibio,nombreProducto} = req.body;

    console.log(req.body);


    const BuscarDuplicado = await pool.query('SELECT id_costos,folio_transferencia FROM movimientosdg WHERE folio_transferencia= $1 and id_costos=$2 and id_centrotrabajo_transfiere=$3;', [consecutivo,idcosto,plantel]);
    
     if(BuscarDuplicado.rowCount > 0){
                res.json("Duplicado");
     }else{

      var response = await pool.query('select nombre_producto from almacen where id_costos='+idcosto);
                 var nom_producto = response.rows[0].nombre_producto;

                 var nuevaExistencia=parseInt(cantidadEnStock) - parseInt(cantidadTransferir);

                
                if(response){

                var response2 = await pool.query(' INSERT INTO movimientosdg(id_costos,existencia_inicial,num_articulos_solicitados,existencia_final,id_centrotrabajo_transfiere,fecha,folio_transferencia,nom_articulo) VALUES ($1, $2, $3, $4, $5, $6,$7,$8)',
                [ idcosto,cantidadEnStock,cantidadTransferir,nuevaExistencia,plantel,fecha,consecutivo,nom_producto]);  

                }else{
                    res.json("Error");
                }


                res.json("Add");

            }      

};



/*const recargarStock = async(req, res) => {


    var idArticulo=req.params.idproducto;
    var idProveedor=req.params.idproveedor;

    var impuesto=(req.body.importe * 0.16).toFixed(2);


    console.log(req.body);
    console.log(impuesto);


    var { partida,producto,proveedor,folio,cantidad,fechaAd,importe,totalCompra} = req.body;

    iva=16;

      var response = await pool.query('select costos.id,id_articulo,id_proveedor,existencias FROM costos ' +
                                      'INNER JOIN almacen ON costos.id = almacen.id_costos where id_articulo='+idArticulo+' and id_proveedor='+idProveedor
                                     );

      if(response.rowCount > 0){


        var idCosto=response.rows[0].id;
        var existencia=response.rows[0].existencias;

        let nuevaExistencia= parseInt(existencia) +  parseInt(cantidad);
        console.log(nuevaExistencia);

        var response5 = await pool.query('UPDATE almacen SET existencias=$1 WHERE id_costos='+idCosto, [nuevaExistencia]);


      }else{
        console.log("SinRegistro")
      }

      if(response5){

               var response3 = await pool.query(' INSERT INTO compras(id_costo,total_articulos,fecha_compra,folio_compra,esactivo) VALUES ($1, $2, $3, $4, $5)',
                [ idCosto,cantidad,fechaAd,folio,true]);  

                       
      }else{
        console.log("error al insertar a la tabla de compra");
        res.json("SinRegistrox")
      }


    //   inicia guardado en tabla de compras_reporte

      if(response3){

       var response4= await pool.query ('INSERT INTO compras_reportes (folio_factura, id_proveedor, fecha_compra, importe, impuesto, total, id_partida) VALUES ($1, $2, $3, $4, $5, $6, $7)', [folio, proveedor, fechaAd, importe, impuesto, totalCompra, partida]);
        res.json("reload");
      }

      else{
        res.json("Error al insertar en compras reporte");
      }

};*/

const recargarStock = async(req, res) => {
    console.log("=== BODY RECIBIDO ===", req.body);
    console.log("req.body.partida:", req.body.partida);
    console.log("req.body.id_partidas:", req.body.id_partidas);
    var idArticulo = req.params.idproducto;
    var idProveedor = req.params.idproveedor;

    // Acepta partida tanto si viene como 'partida' o como 'id_partidas'
    var idPartida = req.body.partida || req.body.id_partidas;
    console.log("--> idPartida final a insertar:", idPartida);
    var cantidad = req.body.cantidad;
    var fechaAd = req.body.fechaAd;
    var folio = req.body.folio;
    var idProv = req.body.proveedor || idProveedor;

    // Manejo de montos con fallback para evitar NaN
    var subtotal = req.body.subTotal || req.body.importe || (req.body.costo * cantidad) || 0;
    var impuesto = (subtotal * 0.16).toFixed(2);
    var totalFinal = req.body.total || req.body.totalCompra || (parseFloat(subtotal) + parseFloat(impuesto));

    try {
        var response = await pool.query(
            'SELECT costos.id, id_articulo, id_proveedor, existencias FROM costos ' +
            'INNER JOIN almacen ON costos.id = almacen.id_costos WHERE id_articulo = $1 AND id_proveedor = $2',
            [idArticulo, idProveedor]
        );

        if (response.rowCount > 0) {
            var idCosto = response.rows[0].id;
            var existencia = response.rows[0].existencias;
            let nuevaExistencia = parseInt(existencia) + parseInt(cantidad);

            await pool.query('UPDATE almacen SET existencias = $1 WHERE id_costos = $2', [nuevaExistencia, idCosto]);

            var response3 = await pool.query(
    'INSERT INTO compras(id_costo, total_articulos, fecha_compra, folio_compra, esactivo, id_partidas) VALUES ($1, $2, $3, $4, $5, $6)',
    [idCosto, cantidad, fechaAd, folio, true, idPartida]
);

            if (response3) {
                await pool.query(
                    'INSERT INTO compras_reportes (folio_factura, id_proveedor, fecha_compra, importe, impuesto, total, id_partida) VALUES ($1, $2, $3, $4, $5, $6, $7)',
                    [folio, idProv, fechaAd, subtotal, impuesto, totalFinal, idPartida]
                );
                return res.json("Save");
            }
        } else {
            console.log("SinRegistro");
            return res.json("SinRegistro");
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error");
    }
};



const getListaArticulosTransferir= async(req, res) => {

    var folio=req.params.folio

    const response = await pool.query('SELECT * from movimientosdg where folio_transferencia='+folio);
    res.status(200).json(response.rows);
    
};

const eliminarArticulo= async(req, res) => {

    var idarticulo=req.params.idarticulo

    const response = await pool.query('delete from movimientosdg where id='+idarticulo);
    res.json("Deleted");
    
};


const confirmarTransferencia= async(req, res) => {

    var consecutivo=req.params.consecutivo

        const response = await pool.query('SELECT * from movimientosdg where folio_transferencia='+consecutivo);  

    if(response.rowCount > 0){

      for(var i=0;i<response.rowCount;i++){

            const seleccion = await pool.query('SELECT * from almacen where id_centrotrabajo='+response.rows[i].id_centrotrabajo_transfiere+' and id_costos='+response.rows[i].id_costos);  
                              

            if(seleccion.rowCount<=0){

                console.log("****************** "+response.rows[i].num_articulos_solicitados);

                var insertarEnAlmacen = await pool.query('INSERT INTO almacen(id_centrotrabajo,id_costos,existencias,fecha_adquisicion,esactivo,nombre_producto) VALUES ($1, $2, $3, $4, $5,$6)',
                [response.rows[i].id_centrotrabajo_transfiere,response.rows[i].id_costos,response.rows[i].num_articulos_solicitados,response.rows[i].fecha,true,response.rows[i].nom_articulo]);  

            }else{
      
                 var existenciaActualizada=parseInt(response.rows[i].num_articulos_solicitados) +  parseInt(seleccion.rows[0].existencias);
                 var actualizacionAlmacen = await pool.query('UPDATE almacen SET existencias=$1 WHERE id_costos='+response.rows[i].id_costos+ ' and id_centrotrabajo= '+response.rows[i].id_centrotrabajo_transfiere, [existenciaActualizada]);

            }


        console.log(response.rows[i].num_articulos_solicitados);

        const response2 = await pool.query('SELECT id_costos,existencias from almacen where id_costos='+response.rows[i].id_costos+ ' and id_centrotrabajo=47');
        console.log(response2.rows[0].existencias)

         var nuevostock= parseInt(response2.rows[0].existencias) - parseInt(response.rows[i].num_articulos_solicitados);
         console.log(nuevostock);


          var response3 = await pool.query('UPDATE almacen SET existencias=$1 WHERE id_costos='+response.rows[i].id_costos+ ' and id_centrotrabajo=47', [nuevostock]);

      }

          const response4 = await pool.query('SELECT folio_transferencia from consecutivo where id=1');
          var nuevoConsecutivo=response4.rows[0].folio_transferencia + 1;

           var response5 = await pool.query('UPDATE consecutivo SET folio_transferencia=$1 WHERE id=1',[nuevoConsecutivo]);

          res.json("ListaOk");

    }
    
};

const confirmarTransferenciaEnPlantel= async(req, res) => {

    var consecutivo=req.params.consecutivo

        const response = await pool.query('SELECT * from movimientosplantel where folio_solicitud='+consecutivo);  

    if(response.rowCount > 0){

      for(var i=0;i<response.rowCount;i++){

            const seleccion = await pool.query('SELECT * from almacen where id_centrotrabajo='+response.rows[i].id_centrotrabajo+' and id_costos='+response.rows[i].id_costos);  
                              
         
                 var existenciaActualizada= parseInt(seleccion.rows[0].existencias) - parseInt(response.rows[i].num_articulos_solicitados);
                 var actualizacionAlmacen = await pool.query('UPDATE almacen SET existencias=$1 WHERE id_costos='+response.rows[i].id_costos+ ' and id_centrotrabajo= '+response.rows[i].id_centrotrabajo, [existenciaActualizada]);

      }

          res.json("ListaOk");

    }
    
};


const getxistencias = async(req, res) => {

    var idplantel=req.params.idplantel;


    const response = await pool.query('Select pa.descripcion as "partida", lower (al.nombre_producto) as "descripcion", al.existencias,al.id_costos ' +
                                        ' from almacen al ' +  
                                        ' INNER JOIN costos co ON (al.id_costos = co.id) ' + 
                                        ' INNER JOIN cat_articulos ca ON (co.id_articulo = ca.id) ' + 
                                        ' INNER JOIN cat_partidas pa ON (ca.id_partidas = pa.id) ' + 
                                        ' where al.id_centrotrabajo =' +idplantel+' ORDER BY pa.clave, ca.clave');


    res.status(200).json(response.rows);

};

const getexistenciaPlantel = async(req, res) => {

    var idArticulo=req.params.idArticulo;


    const response = await pool.query('Select existencias' +
                                      ' from almacen where id='+idArticulo);


    res.status(200).json(response.rows);

};

const getSalidas = async(req, res) => {

    var idplantel=req.params.idplantel;


    const response = await pool.query("select distinct on (movimientosplantel.id_centrotrabajo,movimientosplantel.folio_solicitud) movimientosplantel.id,movimientosplantel.id_costos,num_articulos_solicitados,fecha,nombre_solicita,nombre_autoriza,movimientosplantel.ruta,almacen.descripcion,movimientosplantel.folio_solicitud " +
                                        " from movimientosplantel " +  
                                        " inner join almacen on almacen.id_costos=movimientosplantel.id_costos  " + 
                                        " where movimientosplantel.id_centrotrabajo =" +idplantel+" and almacen.descripcion <> '' ORDER BY movimientosplantel.id_centrotrabajo,movimientosplantel.folio_solicitud, fecha desc");


    res.status(200).json(response.rows);

};


const getexistenciasBajas = async(req, res) => {

    try {

          var idplantel=req.params.idplantel;

    const response = await pool.query('Select pa.descripcion as partida, al.nombre_producto as "descripcion", al.existencias, pro.razon_social as proveedor,pro.telefono ' +
' from almacen al ' + 
' INNER JOIN costos co ON (al.id_costos = co.id) ' +
' INNER JOIN cat_articulos ca ON (co.id_articulo = ca.id) ' +
' INNER JOIN cat_partidas pa ON (ca.id_partidas = pa.id) ' +
' INNER JOIN cat_proveedores pro on (co.id_proveedor=pro.id)' +
' where al.id_centrotrabajo ='+idplantel+' and al.existencias <=10 ' +
' ORDER BY pa.clave, ca.clave');

res.status(200).json(response.rows);


        
    } catch (error) {
    console.log(error);
        
    }
  

};


const UsarArticuloPlantel= async(req, res) => {

     var {nombreAutoriza,nombreSolicita,cantidadDisponible,cantidadAUtilizar,observacion,fecha,idPlantel,idCostos} = req.body;
     var totalStock= parseInt(cantidadDisponible) - parseInt(cantidadAUtilizar);

   var insertMovimientoPlantel = await pool.query('INSERT INTO movimientosplantel(id_costos,existencia_inicial,num_articulos_solicitados,existencia_final,fecha,nombre_solicita,descripcion,nombre_autoriza,esactivo,id_centrotrabajo) VALUES ($1, $2, $3, $4, $5,$6, $7, $8, $9,$10)',
                [idCostos,cantidadDisponible,cantidadAUtilizar,totalStock,fecha,nombreSolicita,observacion,nombreAutoriza,true,idPlantel]); 
                
                if(insertMovimientoPlantel){

                    const selectAlmacen = await pool.query('SELECT existencias from almacen where id_centrotrabajo='+idPlantel+' and id_costos='+ idCostos);

                    var stock=selectAlmacen.rows[0].existencias;
                    var nuevoStock= parseInt(stock) - parseInt(cantidadAUtilizar);

                    if(selectAlmacen){

                        var updateAlmacen = await pool.query('UPDATE almacen SET existencias=$1 WHERE id_centrotrabajo='+idPlantel+' and id_costos='+ idCostos,[nuevoStock]);

                        res.json("Add")

                    }

                }else{
                    res.json("Error al usar el artículo")
                }

    
};



module.exports = {
    getAlumnos,
    registrarStock,
    recargarStock,
    transferirArticulosPlantel,
     getListaArticulosTransferir,
     eliminarArticulo,
     confirmarTransferencia,
     confirmarTransferenciaEnPlantel,
     getxistencias,
     getexistenciaPlantel,
     getSalidas,
     getexistenciasBajas,
     UsarArticuloPlantel

}