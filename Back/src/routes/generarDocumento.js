const { Router } = require('express');
const router = Router();
const multer = require("multer");
const fs = require('fs');

// Controladores generales
const { 
  generarDocumento, 
  subirDocumento, 
  generarDocumentoMultipleEnvio, 
  generarDocumentoMultipleEnvioDirecciones, 
  FormatoRequisicion, 
  FormatoArticulosSurtido, 
  reporte_movimiento_x_partida, 
  reporte_existencias_x_partida, 
  FormatoRequisicionDG, 
  reporte_existencias_x_partida_todas, 
  reporte_movimiento_x_partida_todos, 
  // reporte_de_compras_todas, 
  // reporte_de_compras_x_partida, 
  // reporte_de_compras_x_proveedor, 
  descargarzip, 
  FormatoRequisicionPlantel 
} = require('../controllers/generarDocumento.controller');


// Controladores modulares migrados a Puppeteer
const { 
  ListaArticulosSurtidos, 
  ListaArticulosSurtidosSinMontos 
} = require('../controllers/reporteListaSurtido.controller');

const { 
  ReporteGeneralPorPlantel 
} = require('../controllers/reporteGeneralPorPlantel.controller');


// Reporte nuevos Oscar

const {
  generarReporteEntradasTodas
} = require('../controllers/reporteEntradasTodas.controller');


const {
  generarReporteEntradasPartida
} = require('../controllers/reporteEntradasPartida.controller');

const {
  generarReporteEntradasProveedor
} = require('../controllers/reporteEntradasProveedor.controller');

const { validarJWT } = require('../middlewares/validar-jwt');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    var numidentificador = req.params.numidentificador;
    var areaDocumento = req.params.areaDocumento;

    console.log("************* " + areaDocumento);

    fs.mkdirSync('Documentos/' + areaDocumento + '/' + numidentificador, { recursive: true });

    if (fs.existsSync("Documentos/" + areaDocumento + "/" + numidentificador)) {
      cb(null, "Documentos/" + areaDocumento + "/" + numidentificador);
    } else {
      console.log(valor);
    }
  },
  filename: function(req, file, cb) {
    const filename = file.originalname;
    cb(null, filename);
  },
});

var upload = multer({ storage: storage });

router.post('/generarDocumento/:numidentificador/:fecha_registrox/:Emite', generarDocumento);
router.post('/generarDocumentoMultipleEmision/:numidentificador/:fecha_registrox/:id_externo', generarDocumentoMultipleEnvio);
router.post('/generarDocumentoMultiplesDirecciones/:numidentificador/:fecha_registrox/:id_externo', generarDocumentoMultipleEnvioDirecciones);
router.post('/agregarArchivo/:numidentificador/:areaDocumento', upload.array("files"), subirDocumento);

// REPORTES

// Reporte general por plantel migrado a Puppeteer
router.get('/reporteGeneral/:idPlantel', ReporteGeneralPorPlantel);

router.get('/formatoRequisicion/:idPlantel/:folio', FormatoRequisicion);             // Genera formato de requisicion de Plantel
router.get('/formatoRequisicionDG/:idPlantel/:folio', FormatoRequisicionDG);         // Genera formato de requisicion de DG
router.get('/formatoRequisicionPlantel/:idPlantel/:folio', FormatoRequisicionPlantel); // Genera formato de requisicion en Plantel

// Surtido a planteles migrado a Puppeteer
router.get('/formatoListaArticulosSurtidos/:folio/:plantel', ListaArticulosSurtidos);
router.get('/formatoListaArticulosSurtidosSinMontos/:folio/:plantel', ListaArticulosSurtidosSinMontos);

router.post('/reporte_movimiento_x_partida', reporte_movimiento_x_partida);
router.post('/reporte_movimiento_x_partida_todos', reporte_movimiento_x_partida_todos);
router.post('/reporte_existencias_x_partida', reporte_existencias_x_partida);
router.post('/reporte_existencias_x_partida_todas', reporte_existencias_x_partida_todas);

// Reporte de Compras

// Reporte de entradas: todas las partidas, migrado a Puppeteer
router.post( '/reporte_de_compras_todas', generarReporteEntradasTodas);

//router.post('/reporte_de_compras_x_partida', reporte_de_compras_x_partida);

router.post( '/reporte_de_compras_x_partida', generarReporteEntradasPartida);

//router.post('/reporte_de_compras_x_proveedor', reporte_de_compras_x_proveedor);
router.post( '/reporte_de_compras_x_proveedor', generarReporteEntradasProveedor);

router.post('/descargarzip', descargarzip);

module.exports = router;