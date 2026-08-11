const { Router } = require('express');
const router = Router();
const { 
  listarArticulos, 
  obtenerArticuloPorId, 
  actualizarArticulo, 
  crearArticulo, 
  guardarExistenciasIniciales,
  listarPartidas,           // nuevo
  listarArticulosGeneral
  } = require('../controllers/articulos.controller');

// Rutas específicas PRIMERO (antes de /:id)
router.get('/', listarArticulos);
router.get('/partidas', listarPartidas);
router.get('/general', listarArticulosGeneral);        // nuevo
//router.get('/articulos/partidas', listarArticulosPartidas);               // nuevo

// Agrgado por Oscar
//router.post('/guardarExistenciasIniciales', guardarExistenciasIniciales);
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