const { response } = require('express');
const { Pool } = require('pg');
const pool = new Pool({
    host: process.env.HOST_BD,
    user: process.env.USER_BD,
    password: process.env.PASSWORD_BD,
    database: process.env.DATABASE_BD,
    port: process.env.PORT_BD
})



const subirDocumentoPlanteles = (req, res) => {

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


const subirDocumento = (req, res) => {

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


const subirDocumentoDG = async (req, res) => {

    var status = req.params.cb;

    console.log("ESTE ES EL STATUS: " + status);

    try {

        const file = req.files;

        if (file) {
            res.json(req.files);
            console.log("Se subio el documento correctamente desde DG");

        } else {
            res.json("sin subir");
        }

    } catch (error) {
        console.log(error);
    }

};

const actualizaRuta = async(req, res) => {

    var numidentificador = req.params.numidentificador;
    var folio_solicitud=req.params.folio_solicitud;
    var areaAlmacenaDoc=req.params.idPlantel;

    var status="Enviado a Almacén General"


        if(areaAlmacenaDoc==1){
           var ruta="Documentos/tres_valles/"+numidentificador+"";
        }else if(areaAlmacenaDoc==2){
            var ruta="Documentos/papantla/"+numidentificador;
        }else if(areaAlmacenaDoc==3){
            var ruta="Documentos/benito_juarez/"+numidentificador;
        }else if(areaAlmacenaDoc==4){
            var ruta="Documentos/naolinco/"+numidentificador;
        }else if(areaAlmacenaDoc==5){
            var ruta="Documentos/vega_de_alatorre/"+numidentificador;
        }else if(areaAlmacenaDoc==6){
            var ruta="Documentos/huitzila/"+numidentificador;
        }else if(areaAlmacenaDoc==7){
            var ruta="Documentos/coxquihui/"+numidentificador;
        }else if(areaAlmacenaDoc==8){
            var ruta="Documentos/uxpanapa/"+numidentificador;
        }else if(areaAlmacenaDoc==9){
            var ruta="Documentos/huayacocotla/"+numidentificador;
        }else if(areaAlmacenaDoc==10){
            var ruta="Documentos/agua_dulce/"+numidentificador;
        }

        else if(areaAlmacenaDoc==11){
            var ruta="Documentos/pajapan/"+numidentificador;
        }else if(areaAlmacenaDoc==12){
            var ruta="Documentos/filomeno_mata/"+numidentificador;
        }else if(areaAlmacenaDoc==13){
             var ruta="Documentos/planton_sanchez/"+numidentificador;
        }else if(areaAlmacenaDoc==14){
            var ruta="Documentos/atzalan/"+numidentificador;
        }else if(areaAlmacenaDoc==15){
            var ruta="Documentos/san_rafael/"+numidentificador;
        }else if(areaAlmacenaDoc==16){
            var ruta="Documentos/omealca/"+numidentificador;
        }else if(areaAlmacenaDoc==17){
            var ruta="Documentos/huatusco/"+numidentificador;
        }else if(areaAlmacenaDoc==18){
            var ruta="Documentos/la_camelia/"+numidentificador;
        }else if(areaAlmacenaDoc==19){
            var ruta="Documentos/ciudad_olmeca/"+numidentificador;
        }else if(areaAlmacenaDoc==20){
            var ruta="Documentos/las_lomas/"+numidentificador;
        }else if(areaAlmacenaDoc==21){
            var ruta="Documentos/guayalejo/"+numidentificador;
        }else if(areaAlmacenaDoc==22){
            var ruta="Documentos/medellin/"+numidentificador;
        }else if(areaAlmacenaDoc==23){
            var ruta="Documentos/la_cuesta/"+numidentificador;
        }else if(areaAlmacenaDoc==24){
            var ruta="Documentos/huazuntlan/"+numidentificador;
        }else if(areaAlmacenaDoc==25){
            var ruta="Documentos/otatitlan/"+numidentificador;
        }else if(areaAlmacenaDoc==26){
            var ruta="Documentos/catemaco/"+numidentificador;
        }else if(areaAlmacenaDoc==27){
            var ruta="Documentos/palma_sola/"+numidentificador;
        }else if(areaAlmacenaDoc==28){
            var ruta="Documentos/veracruz/"+numidentificador;
        }else if(areaAlmacenaDoc==29){
            var ruta="Documentos/general_alatriste/"+numidentificador;
        }else if(areaAlmacenaDoc==30){
            var ruta="Documentos/palo_blanco/"+numidentificador;
        } else if(areaAlmacenaDoc==31){
            var ruta="Documentos/coetzala/"+numidentificador;
        }else if(areaAlmacenaDoc==32){
             var ruta="Documentos/direccion_general/"+numidentificador;
        }

        else if(areaAlmacenaDoc==33){
            var ruta="Documentos/administrativo/"+numidentificador;
        }else if(areaAlmacenaDoc==34){
            var ruta="Documentos/academico/"+numidentificador;
        }else if(areaAlmacenaDoc==35){
             var ruta="Documentos/planeacion/"+numidentificador;
        } else if(areaAlmacenaDoc==36){
             var ruta="Documentos/vinculacion/"+numidentificador;
        }else if(areaAlmacenaDoc==37){
             var ruta="Documentos/tecnologia/"+numidentificador;
        } 


         else if(areaAlmacenaDoc==39){
            var ruta="Documentos/recursos_humanos/"+numidentificador;
        }else if(areaAlmacenaDoc==40){
            var ruta="Documentos/recursos_financieros/"+numidentificador;
        }else if(areaAlmacenaDoc==41){
            var ruta="Documentos/recursos_materiales/"+numidentificador;
        } else if(areaAlmacenaDoc==42){
            var ruta="Documentos/contabilidad/"+numidentificador;
        }


          else if(areaAlmacenaDoc==43){
            var ruta="Documentos/juridico/"+numidentificador;
        }
        else if(areaAlmacenaDoc==44){
            var ruta="Documentos/genero/"+numidentificador;
        }
        else if(areaAlmacenaDoc==45){
            var ruta="Documentos/transparencia/"+numidentificador;
        }
        else if(areaAlmacenaDoc==46){
            var ruta="Documentos/sindicato/"+numidentificador;
        }

        

        else if(areaAlmacenaDoc==47){
            var ruta="Documentos/almacen_general/"+numidentificador;
        }






      const actualizaRuta = await pool.query('UPDATE solicitud_material SET ruta=$1,status=$2 WHERE id_centrotrabajo_solicitante=$3 and folio_solicitud=$4', [ruta, status,areaAlmacenaDoc,folio_solicitud]);
      console.log("update Ok");
      res.json("rutaActualizada");

};


const actualizaRutaDG = async(req, res) => {


    console.log("LLEGO a actualizar RUTA DG")

    var numidentificador = req.params.numidentificador;
    var folio_solicitud=req.params.folio_solicitud;
    var areaAlmacenaDoc=req.params.idPlantel;
    var plantelActualizar=req.params.plantelActualizar;   
    var fechaRegistro=req.params.fechaRegistro;

    var status="Proceso Terminado"

    console.log("***"+fechaRegistro);

if(areaAlmacenaDoc==47){
             var ruta="Documentos/almacen_general/"+numidentificador;
        }else{
            
        }

      const actualizaRuta = await pool.query('UPDATE solicitud_material SET ruta_dg=$1,status=$2,fecha_comentario_plantel=$3 WHERE id_centrotrabajo_solicitante=$4 and folio_solicitud=$5', [ruta, status,fechaRegistro,plantelActualizar,folio_solicitud]);
      console.log("update Ok");
      res.json("rutaActualizada");

};



// Actualiza Ruta de requisiciones de plantel


const actualizaRutaPlanteles = async(req, res) => {

    var numidentificador = req.params.numidentificador;
    var id=req.params.id;
    var areaAlmacenaDoc=req.params.idPlantel;

    var status="Enviado a Almacén General"


        if(areaAlmacenaDoc==1){
           var ruta="RequisicionesPlanteles/tres_valles/"+numidentificador+"";
        }else if(areaAlmacenaDoc==2){
            var ruta="RequisicionesPlanteles/papantla/"+numidentificador;
        }else if(areaAlmacenaDoc==3){
            var ruta="RequisicionesPlanteles/benito_juarez/"+numidentificador;
        }else if(areaAlmacenaDoc==4){
            var ruta="RequisicionesPlanteles/naolinco/"+numidentificador;
        }else if(areaAlmacenaDoc==5){
            var ruta="RequisicionesPlanteles/vega_de_alatorre/"+numidentificador;
        }else if(areaAlmacenaDoc==6){
            var ruta="RequisicionesPlanteles/huitzila/"+numidentificador;
        }else if(areaAlmacenaDoc==7){
            var ruta="RequisicionesPlanteles/coxquihui/"+numidentificador;
        }else if(areaAlmacenaDoc==8){
            var ruta="RequisicionesPlanteles/uxpanapa/"+numidentificador;
        }else if(areaAlmacenaDoc==9){
            var ruta="RequisicionesPlanteles/huayacocotla/"+numidentificador;
        }else if(areaAlmacenaDoc==10){
            var ruta="RequisicionesPlanteles/agua_dulce/"+numidentificador;
        }

        else if(areaAlmacenaDoc==11){
            var ruta="RequisicionesPlanteles/pajapan/"+numidentificador;
        }else if(areaAlmacenaDoc==12){
            var ruta="RequisicionesPlanteles/filomeno_mata/"+numidentificador;
        }else if(areaAlmacenaDoc==13){
             var ruta="RequisicionesPlanteles/planton_sanchez/"+numidentificador;
        }else if(areaAlmacenaDoc==14){
            var ruta="RequisicionesPlanteles/atzalan/"+numidentificador;
        }else if(areaAlmacenaDoc==15){
            var ruta="RequisicionesPlanteles/san_rafael/"+numidentificador;
        }else if(areaAlmacenaDoc==16){
            var ruta="RequisicionesPlanteles/omealca/"+numidentificador;
        }else if(areaAlmacenaDoc==17){
            var ruta="RequisicionesPlanteles/huatusco/"+numidentificador;
        }else if(areaAlmacenaDoc==18){
            var ruta="RequisicionesPlanteles/la_camelia/"+numidentificador;
        }else if(areaAlmacenaDoc==19){
            var ruta="RequisicionesPlanteles/ciudad_olmeca/"+numidentificador;
        }else if(areaAlmacenaDoc==20){
            var ruta="RequisicionesPlanteles/las_lomas/"+numidentificador;
        }else if(areaAlmacenaDoc==21){
            var ruta="RequisicionesPlanteles/guayalejo/"+numidentificador;
        }else if(areaAlmacenaDoc==22){
            var ruta="RequisicionesPlanteles/medellin/"+numidentificador;
        }else if(areaAlmacenaDoc==23){
            var ruta="RequisicionesPlanteles/la_cuesta/"+numidentificador;
        }else if(areaAlmacenaDoc==24){
            var ruta="RequisicionesPlanteles/huazuntlan/"+numidentificador;
        }else if(areaAlmacenaDoc==25){
            var ruta="RequisicionesPlanteles/otatitlan/"+numidentificador;
        }else if(areaAlmacenaDoc==26){
            var ruta="RequisicionesPlanteles/catemaco/"+numidentificador;
        }else if(areaAlmacenaDoc==27){
            var ruta="RequisicionesPlanteles/palma_sola/"+numidentificador;
        }else if(areaAlmacenaDoc==28){
            var ruta="RequisicionesPlanteles/veracruz/"+numidentificador;
        }else if(areaAlmacenaDoc==29){
            var ruta="RequisicionesPlanteles/general_alatriste/"+numidentificador;
        }else if(areaAlmacenaDoc==30){
            var ruta="RequisicionesPlanteles/palo_blanco/"+numidentificador;
        } else if(areaAlmacenaDoc==31){
            var ruta="RequisicionesPlanteles/coetzala/"+numidentificador;
        }else if(areaAlmacenaDoc==32){
             var ruta="RequisicionesPlanteles/direccion_general/"+numidentificador;
        }

        else if(areaAlmacenaDoc==33){
            var ruta="RequisicionesPlanteles/administrativo/"+numidentificador;
        }else if(areaAlmacenaDoc==34){
            var ruta="RequisicionesPlanteles/academico/"+numidentificador;
        }else if(areaAlmacenaDoc==35){
             var ruta="RequisicionesPlanteles/planeacion/"+numidentificador;
        } else if(areaAlmacenaDoc==36){
             var ruta="RequisicionesPlanteles/vinculacion/"+numidentificador;
        }else if(areaAlmacenaDoc==37){
             var ruta="RequisicionesPlanteles/tecnologia/"+numidentificador;
        } 


         else if(areaAlmacenaDoc==39){
            var ruta="RequisicionesPlanteles/recursos_humanos/"+numidentificador;
        }else if(areaAlmacenaDoc==40){
            var ruta="RequisicionesPlanteles/recursos_financieros/"+numidentificador;
        }else if(areaAlmacenaDoc==41){
            var ruta="RequisicionesPlanteles/recursos_materiales/"+numidentificador;
        } else if(areaAlmacenaDoc==42){
            var ruta="RequisicionesPlanteles/contabilidad/"+numidentificador;
        }


          else if(areaAlmacenaDoc==43){
            var ruta="RequisicionesPlanteles/juridico/"+numidentificador;
        }
        else if(areaAlmacenaDoc==44){
            var ruta="RequisicionesPlanteles/genero/"+numidentificador;
        }
        else if(areaAlmacenaDoc==45){
            var ruta="RequisicionesPlanteles/transparencia/"+numidentificador;
        }
        else if(areaAlmacenaDoc==46){
            var ruta="RequisicionesPlanteles/sindicato/"+numidentificador;
        }

        
        else if(areaAlmacenaDoc==47){
            var ruta="RequisicionesPlanteles/almacen_general/"+numidentificador;
        }






      const actualizaRuta = await pool.query('UPDATE movimientosplantel SET ruta=$1 WHERE id=$2', [ruta,id]);
      console.log("update Ok");
      res.json("rutaActualizada");

};


module.exports = {

    subirDocumento,
    subirDocumentoPlanteles,
    subirDocumentoDG,
    actualizaRuta,
    actualizaRutaDG,
    actualizaRutaPlanteles
   
}