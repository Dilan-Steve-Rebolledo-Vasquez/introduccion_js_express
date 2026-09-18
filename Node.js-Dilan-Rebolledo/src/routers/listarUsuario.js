//ruta de solo prueba
const {Router} =  require("express")
const enrutador = Router()
const listarUsuario = require("../controllers/rutaListarUsuario")

//funcion (req,res) debe ir en el controlador
enrutador.get("/listarUsuario", listarUsuario)

module.exports = enrutador