const { Router } = require('express');
const router = Router();
const multer = require("multer");
const { generarDocumentoRespuesta, subirDocumentoRespuesta, generarDocumentoRespuestaSinPDF } = require('../controllers/generarDocumentoRespuesta.controller');
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


router.post('/generarDocumentoRespuesta/:numidentificador/:idarea/:iddocumento/:foliounico/:fecha_registrox', generarDocumentoRespuesta);
router.post('/generarDocumentoRespuestaSinPDF/:idarea/:iddocumento/:foliounico/:fecha_registrox', generarDocumentoRespuestaSinPDF);
router.post('/agregarArchivoRespuesta/:numidentificador/:areaDocumento',upload.array("files"), subirDocumentoRespuesta);


module.exports = router;