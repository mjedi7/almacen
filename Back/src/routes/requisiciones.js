const { Router } = require('express');
const router = Router();

const { actualizarPassword,getUserById,agregarUsuario, getPlantelRequisicion, TramitarRequisicion, getListaArticulosRequisicion, eliminarArticuloRequisicion, getRequisicionesPendientes, abrirDocumento, abrirDocumentoDG, subirComentario, abrirDocumentoPlantel, TramitarRequisicionPlantel, getListaArticulosRequisicionPlantel, eliminarArticuloRequisicionPlantel} = require('../controllers/requisiciones.controller');
const { validarJWT } = require('../middlewares/validar-jwt');


router.post('/TramitarRequisicion',TramitarRequisicion);
router.post('/subirComentario/:folio/:cts',subirComentario);
router.get('/traerPlantelRequisicion/:id_plantel',getPlantelRequisicion);
router.get('/getListaArticulosRequisicion/:folio/:plantel',getListaArticulosRequisicion);
router.get('/getListaArticulosRequisicionPlantel/:folio/:plantel',getListaArticulosRequisicionPlantel);
router.delete('/eliminarArticuloRequisicion/:idarticulo',eliminarArticuloRequisicion);

router.delete('/eliminarArticuloRequisicionPlantel/:idarticulo',eliminarArticuloRequisicionPlantel);

router.get('/traerRequisicionesPendientes/:plantel',getRequisicionesPendientes);

router.post('/enviarArticulosEnMovimientosPlantel',TramitarRequisicionPlantel);




router.get('/abrirPDFRequisicion/:ruta',abrirDocumento);
router.get('/abrirPDFRequisicionPlantel/:ruta',abrirDocumentoPlantel);
router.get('/abrirPDFRequisicionDG/:ruta',abrirDocumentoDG);


module.exports = router; 