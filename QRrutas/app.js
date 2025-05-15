const express = require('express');
const path = require('path');

const routes = require("./routes/routes");



const app = express();



const port = 3123;

//Middleware para servir los archivos estaticos(css, img, pdf, etc)

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname,"views")));

 app.use("/", routes);

app.listen(port,()=>{


console.log(`http://localhost:${port}`);
 });