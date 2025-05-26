const db = require('../db');

//Mostrar en lista
exports.getUsers = (req, res) => {
    // Consulta a la DB
    const consulta='SELECT * FROM users';
    
    //Usamos la DB para conectactarnos a la base de datos
    db.query(consulta, (err,results)=>{
        if(err){
            console.error('No se encontro el usuario',err);
            res.send("error comunicate con soporte");
        }
        else{
            res.render('index', {user: results});
        }
    });
};

//Agregar usuario
exports.addUser = (req, res) => {
    const {name, email}=req.body;
    const insertarRegistroUsuario='INSERT INTO users (name, email) VALUES (?,?)';
    db.query(insertarRegistroUsuario, [name,email],(err)=>{
        if(err){
            console.error('No se inserto el registro', err);
        }
        else{
            res.redirect('/');
        }
    });
};

//Editar usuario
exports.editUser = (req, res) => {
    const {id}=req.params;
    const editar='SELECT * FROM users WHERE id = ?';
    db.query(editar,[id],(err,results)=>{
        if(err){
            console.error("Error",err);
        }
        else{
            res.render('edit',{user: results[0]});
        }
    });
};

//Update
exports.updateUser = (req, res) => {
    const {id} = req.params;
    const {name,email} = req.body;
    const actualizarUser = 'UPDATE users SET name=?, email=? WHERE id=?';
    db.query(actualizarUser,[name,email,id],(err)=>{
        if(err){
            console.error("Sin actualizar usuario",err);
            res.send("Error de update")
        }
        else{
            res.redirect('/');
        }
    });
};

//Eliminar
exports.deleteUser = (req, res) => {
    const {id} = req.params;
    const eliminar= 'DELETE FROM users WHERE id=?';
    db.query(eliminar,[id],(err)=>{
        if(err){
            console.err('Error en delete', err); 
            res.send("Error en eliminar usuario");
        }
        else{
            res.redirect('/');
        }
    });
};