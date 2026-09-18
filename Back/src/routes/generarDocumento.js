const { Router } = require('express');
const router = Router();
const multer = require('multer');
const fs = require('fs');

// 1. Controladores generales (legados / no migrados)
const { 
  generarDocumento, 
  subirDocumento, 
  generarDocumentoMultipleEnvio, 
  generarDocumentoMultipleEnvioDirecciones, 
  FormatoRequisicion, 
  FormatoArticulosSurtido, 
  FormatoRequisicionDG, 
  FormatoRequisicionPlantel,
  reporte_existencias_x_partida, 
  reporte_existencias_x_partida_todas, 
  descargarzip 
} = require('../controllers/generarDocumento.controller');

// 2. Controladores modulares migrados a Puppeteer
const { 
  ListaArticulosSurtidos, 
  ListaArticulosSurtidosSinMontos 
} = require('../controllers/reporteListaSurtido.controller');

const { 
  ReporteGeneralPorPlantel 
} = require('../controllers/reporteGeneralPorPlantel.controller');

const { 
  generarReporteSalidasXPartida 
} = require('../controllers/reporteSalidasPartida.controller');

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

// Configuración de Multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const numidentificador = req.params.numidentificador;
    const areaDocumento = req.params.areaDocumento;

    console.log("************* " + areaDocumento);

    const rutaCarpeta = 'Documentos/' + areaDocumento + '/' + numidentificador;
    fs.mkdirSync(rutaCarpeta, { recursive: true });

    if (fs.existsSync(rutaCarpeta)) {
      cb(null, rutaCarpeta);
    } else {
      cb(new Error('Error creando directorio'), null);
    }
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// ==========================================
// RUTAS DE GESTIÓN DE DOCUMENTOS
// ==========================================
router.post('/generarDocumento/:numidentificador/:fecha_registrox/:Emite', generarDocumento);
router.post('/generarDocumentoMultipleEmision/:numidentificador/:fecha_registrox/:id_externo', generarDocumentoMultipleEnvio);
router.post('/generarDocumentoMultiplesDirecciones/:numidentificador/:fecha_registrox/:id_externo', generarDocumentoMultipleEnvioDirecciones);
router.post('/agregarArchivo/:numidentificador/:areaDocumento', upload.array("files"), subirDocumento);

// ==========================================
// REPORTES Y FORMATOS
// ==========================================
// Formatos de requisición
router.get('/formatoRequisicion/:idPlantel/:folio', FormatoRequisicion); 
router.get('/formatoRequisicionDG/:idPlantel/:folio', FormatoRequisicionDG); 
router.get('/formatoRequisicionPlantel/:idPlantel/:folio', FormatoRequisicionPlantel);

// Reporte general por plantel (Puppeteer)
router.get('/reporteGeneral/:idPlantel', ReporteGeneralPorPlantel);

// Surtido a planteles (Puppeteer)
router.get('/formatoListaArticulosSurtidos/:folio/:plantel', ListaArticulosSurtidos);
router.get('/formatoListaArticulosSurtidosSinMontos/:folio/:plantel', ListaArticulosSurtidosSinMontos);

// Salidas por partida (Puppeteer)
router.post('/reporte_movimiento_x_partida_todos', generarReporteSalidasXPartida);
router.post('/reporte_movimiento_x_partida', generarReporteSalidasXPartida);

// Existencias por partida
router.post('/reporte_existencias_x_partida', reporte_existencias_x_partida);
router.post('/reporte_existencias_x_partida_todas', reporte_existencias_x_partida_todas);

// Reportes de Entradas / Compras (Puppeteer)
router.post('/reporte_de_compras_todas', generarReporteEntradasTodas);
router.post('/reporte_de_compras_x_partida', generarReporteEntradasPartida);
router.post('/reporte_de_compras_x_proveedor', generarReporteEntradasProveedor);

// Utilidades
router.post('/descargarzip', descargarzip);

module.exports = router;