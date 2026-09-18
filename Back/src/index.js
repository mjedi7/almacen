console.log('>>> [DEBUG] CARGANDO ARCHIVO:', __filename);
const cors = require('cors');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

// IMPORTACIÓN DEL CONTROLADOR DE SALIDAS
const { generarReporteSalidasXPartida } = require('./controllers/reporteSalidasPartida.controller');

const app = express();
const port = process.env.PORT || 3000;

// Configuración de la conexión a la base de datos
const pool = new Pool({
  host: process.env.HOST_BD,
  user: process.env.USER_BD,
  password: process.env.PASSWORD_BD,
  database: process.env.DATABASE_BD,
  port: Number(process.env.PORT_BD || 5432),
});

app.use(cors());
app.use(express.json());

// ==========================================
// ENDPOINT DIRECTO: SIGUIENTE CLAVE CONSECUTIVA
// ==========================================
app.get('/articulos/siguiente-clave/:idPartida', async (req, res) => {
  try {
    const { idPartida } = req.params;

    if (!idPartida || idPartida === 'null' || idPartida === 'undefined') {
      return res.status(400).json({ ok: false, msg: 'ID de partida requerido' });
    }

    // Obtiene el número entero máximo de la partida seleccionada
    const query = `
      SELECT COALESCE(
        MAX(
          CASE 
            WHEN clave ~ '^[0-9]+$' THEN clave::integer 
            ELSE NULLIF(regexp_replace(clave, '[^0-9]', '', 'g'), '')::integer 
          END
        ), 
        0
      ) + 1 AS siguiente_numero
      FROM cat_articulos
      WHERE id_partidas = $1::integer
    `;

    const { rows } = await pool.query(query, [Number(idPartida)]);
    const num = rows[0]?.siguiente_numero || 1;

    // Formatea con 3 dígitos mínimos (ej. 1 -> "001", 2721 -> "2722")
    const clave = num < 1000 ? String(num).padStart(3, '0') : String(num);

    return res.status(200).json({ ok: true, clave });

  } catch (e) {
    console.error('Error calculando clave:', e);
    return res.status(500).json({ ok: false, msg: 'Error interno', error: e.message });
  }
});

// ==========================================
// RUTA DIRECTA DEL REPORTE DE SALIDAS
// ==========================================
app.post('/pdfkit/reporte-salidas-partida', (req, res) => {
  console.log('>>> [OK] PETICIÓN LLEGÓ AL ENDPOINT EN INDEX.JS');
  return generarReporteSalidasXPartida(req, res);
});

// 1. RUTAS CON PREFIJO ESPECÍFICO (PRIORIDAD ALTA)
app.use('/articulos', require('./routes/articulos'));
app.use('/partidas', require('./routes/partidas'));
app.use('/unidad-medida', require('./routes/unidad_medida'));
app.use('/proveedores', require('./routes/proveedores'));

// 2. RUTAS SIN PREFIJO
app.use(require('./routes/routes.login'));
app.use(require('./routes/traerDatosGenerales'));
app.use(require('./routes/generarDocumento'));
app.use(require('./routes/generarDocumentoRespuesta'));
app.use(require('./routes/requisiciones'));
app.use(require('./routes/subirDocumentos'));
app.use(require('./routes/reportesPDFKit')); 
app.use(require('./routes/index')); // index siempre al final de las rutas

app.listen(port, '0.0.0.0', () => {
  console.log('Server on port ' + port);
});