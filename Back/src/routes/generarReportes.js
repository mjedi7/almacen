const { Router } = require('express');
const router = Router();

// Controladores modulares (Puppeteer)
const { reporteKardex } = require('../controllers/reporteKardex.controller');
const { generarReporteExistencias } = require('../controllers/reporteExistencias.controller');
const { generarReporteSalidasXPartida } = require('../controllers/reporteSalidasPartida.controller');
const { ReporteGeneralPorPlantel } = require('../controllers/reporteGeneralPorPlantel.controller');
const { 
  ListaArticulosSurtidos, 
  ListaArticulosSurtidosSinMontos 
} = require('../controllers/reporteListaSurtido.controller');
const { generarReporteEntradasTodas } = require('../controllers/reporteEntradasTodas.controller');
const { generarReporteEntradasPartida } = require('../controllers/reporteEntradasPartida.controller');
const { generarReporteEntradasProveedor } = require('../controllers/reporteEntradasProveedor.controller');
const {descargarzip} = require('../controllers/descargarZip.controller');

// ==========================================
// RUTAS DE REPORTES
// ==========================================

// Kárdex
router.get('/reporte/kardex/:idPartida?', reporteKardex);

// Existencias
router.post('/reporte/existencias', generarReporteExistencias);

// Salidas por partida
router.post('/reporte/salidas-partida', generarReporteSalidasXPartida);

// General por plantel
router.get('/reporte/general-plantel/:idPlantel', ReporteGeneralPorPlantel);

// Surtido a planteles
router.get('/formatoListaArticulosSurtidos/:folio/:plantel', ListaArticulosSurtidos);
router.get('/formatoListaArticulosSurtidosSinMontos/:folio/:plantel', ListaArticulosSurtidosSinMontos);

// Entradas / Compras
router.post('/reporte/compras-todas', generarReporteEntradasTodas);
router.post('/reporte/compras-partida', generarReporteEntradasPartida);
router.post('/reporte/compras-proveedor', generarReporteEntradasProveedor);
// Descarga del paquete ZIP
router.post('/descargarzip', descargarzip);

module.exports = router;