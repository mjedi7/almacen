const cors = require('cors');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());

//routes
app.use(require('./routes/routes.login'));
app.use(require('./routes/index'));
app.use(require('./routes/traerDatosGenerales'));
app.use(require('./routes/generarDocumento'));
app.use(require('./routes/generarDocumentoRespuesta'));
app.use(require('./routes/requisiciones'));
app.use(require('./routes/subirDocumentos'));

app.use('/articulos', require('./routes/articulos'));
app.use('/partidas', require('./routes/partidas'));
app.use('/proveedores', require('./routes/proveedores'))


app.listen(port);
console.log('Server on port ' + port);