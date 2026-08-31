const { Router } = require('express');
const router = Router();
const { pruebaReporte } = require('../controllers/reportesPDFKit.controller');

router.get('/reporte/prueba/:idPartida?', pruebaReporte);

module.exports = router;