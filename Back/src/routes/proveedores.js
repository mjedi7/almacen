const { Router } = require('express');
const router = Router();
const { 
  listarProveedores,
  crearProveedor,
  traerProveedoresPorArticulo 
} = require('../controllers/proveedores.controller');

router.get('/', listarProveedores);
router.post('/', crearProveedor);
router.get('/traerProveedoresPorArticulo/:idArticulo', traerProveedoresPorArticulo);

module.exports = router;
