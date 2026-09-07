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
<<<<<<< HEAD
  traerProductosPorPartida, // <--- Nombre corregido aquí
  obtenerSiguienteClave,
  relacionarArticuloProveedor,
=======
  traerProductosPorPartida,
  relacionarArticuloProveedor, // Se agrega para evitar ReferenceError en router.post('/relacionarProveedor')
  listarArticulosPorPartida
>>>>>>> 1c468ff3 (Listar Articulos x partida modulo)
} = require('../controllers/articulos.controller');

// Rutas específicas PRIMERO (antes de /:id)
router.get('/', listarArticulos);
router.get('/partidas', listarPartidas);
router.get('/general', listarArticulosGeneral);
router.get('/traerProductos/:idPartida', traerProductosPorPartida);

const { validarJWT } = require('../middlewares/validar-jwt');

<<<<<<< HEAD
router.post(
  '/guardarExistenciasIniciales',
  validarJWT,
  guardarExistenciasIniciales
);
router.post('/relacionarProveedor', relacionarArticuloProveedor);

// Rutas con parámetro dinámico AL FINAL
=======
router.get('/por-partida/:idPartida', listarArticulosPorPartida);

// 3. Rutas con parámetro dinámico AL FINAL
>>>>>>> 1c468ff3 (Listar Articulos x partida modulo)
router.get('/:id', obtenerArticuloPorId);
router.put('/:id', actualizarArticulo);
router.post('/', crearArticulo);

module.exports = router;