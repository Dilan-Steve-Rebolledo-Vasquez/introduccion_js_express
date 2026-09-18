//agrupa las rutas de mi aplicacion
const {Router} =  require("express")
const enrutador = Router()
const pruebaRouter = require("./pruebaRouter");
const listarUsuario = require("../controllers/rutaListarUsuario");

enrutador.use("/rutaPrueba", pruebaRouter, listarUsuario);
//ejemplo
//enrutador.use("/usuarios", usuariosRouter)

module.exports = enrutador