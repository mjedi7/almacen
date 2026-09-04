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
  traerProductosPorPartida,
  relacionarArticuloProveedor // Se agrega para evitar ReferenceError en router.post('/relacionarProveedor')
} = require('../controllers/articulos.controller');

const { validarJWT } = require('../middlewares/validar-jwt');

// 1. Rutas específicas (antes de :id)
router.get('/', listarArticulos);
router.get('/partidas', listarPartidas);
router.get('/general', listarArticulosGeneral);
router.get('/traerProductos/:idPartida', traerProductosPorPartida);

// 2. Rutas POST
router.post('/guardarExistenciasIniciales', validarJWT, guardarExistenciasIniciales);
router.post('/relacionarProveedor', relacionarArticuloProveedor);
router.post('/', crearArticulo);

// 3. Rutas con parámetro dinámico AL FINAL
router.get('/:id', obtenerArticuloPorId);
router.put('/:id', actualizarArticulo);

module.exports = router;