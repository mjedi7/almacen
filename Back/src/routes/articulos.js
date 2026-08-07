const { Router } = require('express');
const router = Router();
const { listarArticulos, obtenerArticuloPorId, actualizarArticulo, crearArticulo } = require('../controllers/articulos.controller');

router.get('/', listarArticulos);          // ← lista
router.get('/:id', obtenerArticuloPorId);
router.put('/:id', actualizarArticulo);
router.post ('/',crearArticulo);

module.exports = router;

