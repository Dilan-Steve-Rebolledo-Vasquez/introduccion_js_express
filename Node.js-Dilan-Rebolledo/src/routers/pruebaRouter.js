//ruta de solo prueba
const {Router} =  require("express")
const enrutador = Router()
const mostrarRuta = require("../controllers/rutaPruebaController")

//funcion (req,res) debe ir en el controlador
enrutador.get("/rutaPersonal1", mostrarRuta)

module.exports = enrutador