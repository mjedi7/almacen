const { response } = require('express');
const { Pool } = require('pg');
const pool = new Pool({
    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE_BD,
    port: process.env.PORT_BD
})

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

const generarDocumentoRespuesta = async(req, res) => {

     var numidentificador=req.params.numidentificador;
     var IdArea=req.params.idarea;
     var IdDocumento=req.params.iddocumento;
     var folio_unico=req.params.foliounico;
     var fecha_registrox=req.params.fecha_registrox;
 
    console.log(req.body)

    console.log(numidentificador);
    console.log(IdArea);
    console.log(IdDocumento);

    var {

        tipo,
        tipoAtencion,
        personaQueEmite,
        tipoDocumento,
        referenciaDocumento,
        fechaRespuesta,
        resumen,
        nombreAreaEmite,
        nombreAreaTurnada,
        atendidoPor,
        id_departamentox
    
        } = req.body;

        var estatus="Atendido";

        const datosBase = await pool.query("select * from documentos_generados where referencia='"+referenciaDocumento+"'");

        if(datosBase.rowCount>0){

            console.log("IF  Repetido")
            res.json("Repetido");
    
         }else{


    if(IdArea==99){
        var ruta="Documentos/Direccion/"+numidentificador+"";
    }else if(IdArea==98){
        var ruta="Documentos/Academica/"+numidentificador+"";
    }else if(IdArea==97){
        var ruta="Documentos/Administrativa/"+numidentificador+"";
    }else if(IdArea==96){
        var ruta="Documentos/Vinculacion/"+numidentificador+"";
    }else if(IdArea==95){
        var ruta="Documentos/Planeacion/"+numidentificador+"";
    }else if(IdArea==94){
        var ruta="Documentos/Tecnologia/"+numidentificador+"";
    }else if(IdArea==93){
        var ruta="Documentos/Juridico/"+numidentificador+"";
    }else if(IdArea==92){
        var ruta="Documentos/Transparencia/"+numidentificador+"";
    }else if(IdArea==91){
        var ruta="Documentos/UnidadGenero/"+numidentificador+"";
      }else if(IdArea==90){
        var ruta="Documentos/Oficialia/"+numidentificador+"";
      }

    try {
        var response = await pool.query(' INSERT INTO documentos_generados(tipo,tipo_atencion,persona_que_emite,tipo_documento,referencia,fecha_de_respuesta,resumen, url_respuesta,nombre_area_emite,nombre_area_turnada,atendido_por,id_respuesta,fecha_registro,departamento_emite) VALUES ($1, $2, $3, $4, $5, $6, ' +
            '$7, $8, $9,$10,$11,$12,$13,$14 ) returning id as ultimoid; ', [tipo,tipoAtencion, personaQueEmite, tipoDocumento,referenciaDocumento,
                fechaRespuesta,resumen,ruta,nombreAreaEmite,nombreAreaTurnada,atendidoPor,folio_unico,fecha_registrox,id_departamentox

                
            ]);
            
            var ultimoID = response.rows[0].ultimoid; 

            if(response){

            const response2 = await pool.query("select * from folios_unicos");

            if (response2.rowCount > 0) {

                 var incremento= parseInt(response2.rows[0].folio_unico) + 1;
                 const Fecha = new Date();
                 let anio = Fecha.getFullYear();

                 const response3 = await pool.query('UPDATE folios_unicos SET folio_unico=$1,anio=$2 WHERE (id=1)', [
                    incremento,
                    anio
                ]);

                const response4 = await pool.query('UPDATE documentos_generados SET folio_unico=$1 WHERE (id=$2)', [
                    incremento,
                    ultimoID
                ]);

                const response5 = await pool.query('UPDATE documentos_generados SET url_respuesta=$1,estatus=$2,atendido_por=$3 WHERE (id=$4)', [
                    ruta,
                    estatus,
                    atendidoPor,
                    IdDocumento
                ]);

                var mensaje="Registrado";

                res.status(200).json({ incremento, mensaje});
        
        
            } else {
                res.json("NoEncontrado");
            }

        }

    } catch (error) {
        console.log("Error: " + error);
    }

}

 
};



const generarDocumentoRespuestaSinPDF = async(req, res) => {


    var IdArea=req.params.idarea;
    var IdDocumento=req.params.iddocumento;
    var folio_unico=req.params.foliounico;
    var fecha_registrox=req.params.fecha_registrox;

   console.log(req.body)


   var {

       tipo,
       tipoAtencion,
       personaQueEmite,
       tipoDocumento,
       referenciaDocumento,
       fechaRespuesta,
       resumen,
       nombreAreaEmite,
       nombreAreaTurnada,
       url_respuesta,
       atendidoPor,
       id_departamentox
   
       } = req.body;

       var estatus="Atendido";

   try {
       var response = await pool.query(' INSERT INTO documentos_generados(tipo_atencion,persona_que_emite,tipo_documento,fecha_de_respuesta,nombre_area_emite,nombre_area_turnada,atendido_por,id_respuesta,fecha_registro,url_respuesta,departamento_emite) VALUES ($1, $2, $3, $4, $5, $6, ' +
           '$7,$8,$9,$10,$11 ) returning id as ultimoid; ', [tipoAtencion, personaQueEmite, tipoDocumento,
               fechaRespuesta,nombreAreaEmite,nombreAreaTurnada,atendidoPor,folio_unico,fecha_registrox,url_respuesta,id_departamentox

               
           ]);
           
           var ultimoID = response.rows[0].ultimoid; 

           if(response){

           const response2 = await pool.query("select * from folios_unicos");

           if (response2.rowCount > 0) {

                var incremento= parseInt(response2.rows[0].folio_unico) + 1;
                const Fecha = new Date();
                let anio = Fecha.getFullYear();

                const response3 = await pool.query('UPDATE folios_unicos SET folio_unico=$1,anio=$2 WHERE (id=1)', [
                   incremento,
                   anio
               ]);

               const response4 = await pool.query('UPDATE documentos_generados SET folio_unico=$1 WHERE (id=$2)', [
                   incremento,
                   ultimoID
               ]);

               const response5 = await pool.query('UPDATE documentos_generados SET url_respuesta=$1,estatus=$2,atendido_por=$3 WHERE (id=$4)', [
                   url_respuesta,
                   estatus,
                   atendidoPor,
                   IdDocumento
               ]);

               var mensaje="Registrado";

               res.status(200).json({ incremento, mensaje});
       
       
           } else {
               res.json("NoEncontrado");
           }

       }

   } catch (error) {
       console.log("Error: " + error);
   }

};




const subirDocumentoRespuesta = (req, res) => {

    var status = req.params.cb;

    console.log("ESTE ES EL STATUS: " + status);

    try {

        const file = req.files;

        if (file) {
            res.json(req.files);
            console.log("Se subio el documento correctamente");
        } else {
            res.json("sin subir");
        }


    } catch (error) {
        console.log(error);
    }

};

module.exports = {
    generarDocumentoRespuesta,
    generarDocumentoRespuestaSinPDF,
    subirDocumentoRespuesta
   
}
