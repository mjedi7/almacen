const { Router } = require('express');
const router = Router();

const { actualizarPassword,getUserById,agregarUsuario} = require('../controllers/login.controller');
const { validarJWT } = require('../middlewares/validar-jwt');

router.put('/actualizar/:email/:password', actualizarPassword);
router.get('/users/:email/:password', getUserById);
router.post('/AgregarUsuario',agregarUsuario)

module.exports = router; 