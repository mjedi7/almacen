const { Router } = require('express');
const { getUnidadesMedida } = require('../controllers/unidad_medida.controller');

const router = Router();

router.get('/', getUnidadesMedida);

module.exports = router;