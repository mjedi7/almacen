const multer = require('multer')
const { Router } = require('express');
const router = Router();

const { getAlumnos, registrarStock,recargarStock, transferirArticulosPlantel, getListaArticulosTransferir, eliminarArticulo, confirmarTransferencia, getxistencias, getexistenciasBajas, UsarArticuloPlantel, getSalidas, getexistenciaPlantel, confirmarTransferenciaEnPlantel, } = require('../controllers/index.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

router.get('/alumnos', [validarJWT], getAlumnos);


const recepciones = require('../controllers/recepciones.controller');
router.post('/registrarStock', recepciones.autorizar, recepciones.registrarCompra);
router.get('/compras/por-folio', recepciones.autorizar, recepciones.buscar);
router.get('/compras/:id/recepciones', recepciones.autorizar, recepciones.historial);
router.post('/compras/recepciones', recepciones.autorizar, recepciones.recibir);
// El cliente anterior no debe crear compras al recibir pendientes.
router.post('/recargarStock/:idproducto/:idproveedor', recepciones.autorizar, (req,res) =>
  res.status(409).json({error:'Actualice la pantalla y reciba los pendientes desde Folio de compra.'}));
router.post('/TransferirArticulosPlantel',transferirArticulosPlantel);
router.get('/getListaArticulosTransferir/:folio',getListaArticulosTransferir);
router.delete('/eliminarArticulo/:idarticulo',eliminarArticulo);
router.get('/confirmarTransferencia/:consecutivo',confirmarTransferencia);
router.get('/confirmarTransferenciaEnPlantel/:consecutivo',confirmarTransferenciaEnPlantel);


router.get('/getExistencias/:idplantel',getxistencias);

router.get('/traerDisponiblePlantel/:idArticulo',getexistenciaPlantel);



router.get('/getSalidas/:idplantel',getSalidas);

router.get('/getExistenciasBajas/:idplantel',getexistenciasBajas );

router.post('/UsarArticuloPlantel',UsarArticuloPlantel);







module.exports = router;