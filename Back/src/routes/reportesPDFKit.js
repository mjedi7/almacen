const { Router } = require('express');
const router = Router();

const { pruebaReporte } = require('../controllers/reportesPDFKit.controller');
const { generarReporteExistencias } = require('../controllers/reporteExistencias.controller');
const { generarReporteSalidasXPartida } = require('../controllers/reporteSalidasPartida.controller');

router.get('/reporte/prueba/:idPartida?', pruebaReporte);
router.post('/pdfkit/reporte-existencias', generarReporteExistencias);
router.post('/pdfkit/reporte-salidas-partida', generarReporteSalidasXPartida);

module.exports = router;