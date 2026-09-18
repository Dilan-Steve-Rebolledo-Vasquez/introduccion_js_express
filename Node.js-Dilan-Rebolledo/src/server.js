//importar mi aplicacion
const app = require("./app")

//verificar puerto de las variables de entorno
const PUERTO = process.env.PUERTP || 3333

//imprimo por consola el link del servidor
app.listen(PUERTO, ()=>{
    console.log(`MI SERVIDOR: http://localhost:${PUERTO}`)
})