const { Router } = require('express');
const router = Router();

// console.log('ARTICULOS.JS CARGADO');
// console.log(__filename);

const { 
  listarArticulos, 
  obtenerArticuloPorId, 
  actualizarArticulo, 
  crearArticulo, 
  guardarExistenciasIniciales,
  listarPartidas,
  listarArticulosGeneral,
  traerProductosPorPartida,
  relacionarArticuloProveedor, // Se agrega para evitar ReferenceError en router.post('/relacionarProveedor')
  listarArticulosPorPartida // Para modulo de Listar Articulos por partida
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

// Ruta de modulo de Listar Articulos por partida
router.get('/por-partida/:idPartida',listarArticulosPorPartida);

// 3. Rutas con parámetro dinámico AL FINAL
router.get('/:id', obtenerArticuloPorId);
router.put('/:id', actualizarArticulo);


module.exports = router;