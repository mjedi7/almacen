const { Router } = require('express');
const router = Router();
const multer = require("multer");
const { subirDocumento, actualizaRuta, subirDocumentoDG, actualizaRutaDG, actualizaRutaPlanteles, subirDocumentoPlanteles} = require('../controllers/subirDocumento.controller');
const { validarJWT } = require('../middlewares/validar-jwt');
var fs = require('fs');

    const storage = multer.diskStorage({

        destination: function(req, file, cb) {

            var numidentificador = req.params.numidentificador;
            var areaDocumento=req.params.areaDocumento;

            fs.mkdirSync('Documentos/'+areaDocumento+'/' + numidentificador, { recursive: true });

            if (fs.existsSync("Documentos/"+areaDocumento+"/" + numidentificador)) {
                cb(null, "Documentos/"+areaDocumento+"/" + numidentificador);
            } else {
                console.log(valor);
            }


        },
        filename: function(req, file, cb) {

            const filename = file.originalname;

            cb(null, filename);

        },
    });

    var upload = multer({ dest: "Documentos/"+this.areaDocumento+""});
    var upload = multer({ storage: storage });




    // Subir documento de Requisición desde el plantel


        const storage2 = multer.diskStorage({

        destination: function(req, file, cb) {

            var numidentificador = req.params.numidentificador;
            var areaDocumento=req.params.areaDocumento;

            fs.mkdirSync('RequisicionesPlanteles/'+areaDocumento+'/' + numidentificador, { recursive: true });

            if (fs.existsSync("RequisicionesPlanteles/"+areaDocumento+"/" + numidentificador)) {
                cb(null, "RequisicionesPlanteles/"+areaDocumento+"/" + numidentificador);
            } else {
                console.log(valor);
            }


        },
        filename: function(req, file, cb) {

            const filename = file.originalname;

            cb(null, filename);

        },
    });

    var upload2 = multer({ dest: "RequisicionesPlanteles/"+this.areaDocumento+""});
    var upload2 = multer({ storage: storage2 });





router.post('/SubirArchivoRequisicionPlantel/:numidentificador/:areaDocumento',upload2.array("files"), subirDocumentoPlanteles);

router.post('/SubirArchivoRequisicion/:numidentificador/:areaDocumento',upload.array("files"), subirDocumento);
router.post('/SubirArchivoRequisicionDG/:numidentificador/:areaDocumento',upload.array("files"), subirDocumentoDG);
router.put('/actualizaRuta/:numidentificador/:folio_solicitud/:idPlantel', actualizaRuta);
router.put('/actualizaRutaPlanteles/:numidentificador/:id/:idPlantel', actualizaRutaPlanteles);
router.put('/actualizaRutaDG/:numidentificador/:folio_solicitud/:idPlantel/:plantelActualizar/:fechaRegistro', actualizaRutaDG);





module.exports = router;