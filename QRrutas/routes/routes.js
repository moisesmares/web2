const express = require('express');
const path = require('path');
const router = express.Router();


// Ruta principal (corregido: "res" en lugar de "rs")
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
});

// Ruta de registro (también corregido)
router.get("/registro.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/registro.html"));
});

// Ruta de registro (también corregido)
router.get("/generacionQr.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/generacionQr.html"));
});

// Ruta de registro (también corregido)
router.get("/calculadora.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../views/calculadora.html"));
});

module.exports = router;