const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/router');

const app = express();

//Sirve para archivos estaticos en css, img etc
app.use(express.static(path.join(__dirname, 'public')));

//Manejar peticiones pro medio de URL usando POST y por medio de REQ
app.use(bodyParser.urlencoded({ extended: false }));

//Configuracion de plantillas
app.set('view engine', 'ejs');

//Uso de las rutas
app.use('/', routes);

//Iniciar el servidor
const port = 3005;
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
