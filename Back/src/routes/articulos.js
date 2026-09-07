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
  relacionarArticuloProveedor,
} = require('../controllers/articulos.controller');

// Rutas específicas PRIMERO (antes de /:id)
router.get('/', listarArticulos);
router.get('/partidas', listarPartidas);
router.get('/general', listarArticulosGeneral);
router.get('/traerProductos/:idPartida', traerProductosPorPartida);

const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
  '/guardarExistenciasIniciales',
  validarJWT,
  guardarExistenciasIniciales
);
router.post('/relacionarProveedor', relacionarArticuloProveedor);

// Rutas con parámetro dinámico AL FINAL
router.get('/:id', obtenerArticuloPorId);
router.put('/:id', actualizarArticulo);
router.post('/', crearArticulo);

module.exports = router;