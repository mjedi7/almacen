const { Router } = require('express');
const router = Router();

const { traerPartidas,traerProductos,traerProveedores,datosDelProveedor, traerPlanteles, traerTotalDisponible, traerConsecutivo, traerDatosAdmin, traerProductosDesdeTransferir, traerConsecutivoRequisicion, getUsuarios, getTodosUsuarios, traerPlanteles2, datosCostosArticulo, traerProductosDesdeUsarArticuloPlantel, traerConsecutivoUsarArticuloPlantel} = require('../controllers/traerDatosGenerales.controller.js');
const { validarJWT } = require('../middlewares/validar-jwt');

router.get('/traerPartidas', traerPartidas);        //Ruta para traer PArtidas
router.get('/traerProductos/:id', traerProductos);        //Ruta para traer Productos
router.get('/traerProductosDesdeTransferir/:id', traerProductosDesdeTransferir); // traer productos desde peticion de transferir articulos
router.get('/traerProductosDesdeUsarArticuloPlantel/:plantel', traerProductosDesdeUsarArticuloPlantel); // traer productos desde usar articulo en plantel
router.get('/traerProveedores', traerProveedores);        //Ruta para traer Proveedores
router.get('/traerDatosProveedores/:id', datosDelProveedor); 
router.get('/traerPlanteles',traerPlanteles2);   
router.get('/traerPlanteles/:plantel', traerPlanteles);  
router.get('/traerTotalDisponible/:producto', traerTotalDisponible);   
router.get('/traerConsecutivo', traerConsecutivo);   //Traer consecutivo de transferencias
router.get('/traerConsecutivoRequisicion/:id_plantel', traerConsecutivoRequisicion);   //Traer consecutivo de transferencias
router.get('/traerDatosAdministrativo/:idPlantel',traerDatosAdmin);

router.get('/traerConsecutivoPlantelesUsarArticulo/:plantel',traerConsecutivoUsarArticuloPlantel);   //Traer consecutivo de plantles usar Articulo



router.get('/getusuarios/:area', getUsuarios);
router.get('/gettodosusuarios', getTodosUsuarios);


router.get('/traerCostoArticulo/:idProveedor/:idProducto',datosCostosArticulo);


module.exports = router;