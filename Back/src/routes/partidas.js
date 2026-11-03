const { Router } = require('express');
const router = Router();
const { listarPartidas, crearPartida } = require('../controllers/partidas.controller');

router.get('/', listarPartidas);
router.post('/', crearPartida);

module.exports = router;
