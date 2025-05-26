const mysql = require('mysql2');

//conexion a la DB
const db=mysql.createConnection({
   host:'localhost', //server
   user:'root', //user
   password: '1234', //pass
   database: 'node_crud', //Nombre de la DB
   port:3306 //port
});

//Validacion de la conexion a la DB
db.connect(err=>{
    if(err){
        console.error('Sin conexion a la DB', err);
    }
    else{
        console.log('Base de datos conectada');
    }
});

module.exports = db;