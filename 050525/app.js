/*const express = require('express');
const rutas = require('./routes/ruta');
const { route } = require('./routes/ruta');
const app = express();

const port = 5023;
app.use("/", routes)

app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});
*/

const express = require('express');
const app = express();

const rutas = require('./routes/ruta');  

app.use("/", rutas);

// Ruta 1: Raíz
app.get('/', (req, res) => {
    res.send('Ruta principal: Bienvenido al servidor');
});

// Ruta 2: /about
app.get('/about', (req, res) => {
    res.send('Ruta About: Información sobre nosotros');
});

// Ruta 3: /contact
app.get('/contact', (req, res) => {
    res.send('Ruta Contact: Contáctanos');
});

// Ruta 4: /services
app.get('/services', (req, res) => {
    res.send('Ruta Services: Nuestros servicios');
});

app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});
