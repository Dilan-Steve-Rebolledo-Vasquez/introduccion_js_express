const ormPrisma = require("../config/conexion")

const listarUsuarios = async ()=>{
    const usuarios = await ormPrisma.User.findMany()
    return usuarios
}

module.exports = listarUsuarios