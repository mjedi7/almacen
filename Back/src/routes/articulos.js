const { Router } = require('express');
const router = Router();
const { 
  listarArticulos, 
  obtenerArticuloPorId, 
  actualizarArticulo, 
  crearArticulo, 
  guardarExistenciasIniciales,
  listarPartidas,
  listarArticulosGeneral,
  traerProductosPorPartida, // <--- Nombre corregido aquí
  obtenerSiguienteClave,
} = require('../controllers/articulos.controller');

// Rutas específicas PRIMERO (antes de /:id)
router.get('/', listarArticulos);
router.get('/partidas', listarPartidas);
router.get('/general', listarArticulosGeneral);
/*router.get('/siguiente-clave/:idPartida', (req, res, next) => {
  console.log('>>> ¡Petición recibida en siguiente-clave con ID:', req.params.idPartida);
  obtenerSiguienteClave(req, res, next);
});*/
router.get('/traerProductos/:idPartida', traerProductosPorPartida);

const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
  '/guardarExistenciasIniciales',
  validarJWT,
  guardarExistenciasIniciales
);

// Rutas con parámetro dinámico AL FINAL
router.get('/:id', obtenerArticuloPorId);
router.put('/:id', actualizarArticulo);
router.post('/', crearArticulo);

module.exports = router;