//ruta de solo prueba
const {Router} =  require("express")
const enrutador = Router()
const {mostrarRutaUsuarios, registrarController, loginController} = require("../controllers/rutaUsuariosController")

//funcion (req,res) debe ir en el controlador
enrutador.get("/listado", mostrarRutaUsuarios)
enrutador.get("/registrar", registrarController)
enrutador.get("/login", loginController)

module.exports = enrutador