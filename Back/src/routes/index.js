const multer = require('multer')
const { Router } = require('express');
const router = Router();

const { getAlumnos, registrarStock,recargarStock, transferirArticulosPlantel, getListaArticulosTransferir, eliminarArticulo, confirmarTransferencia, getxistencias, getexistenciasBajas, UsarArticuloPlantel, getSalidas, getexistenciaPlantel, confirmarTransferenciaEnPlantel, } = require('../controllers/index.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

router.get('/alumnos', [validarJWT], getAlumnos);


router.post('/registrarStock', registrarStock);
router.post('/recargarStock/:idproducto/:idproveedor', recargarStock);
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