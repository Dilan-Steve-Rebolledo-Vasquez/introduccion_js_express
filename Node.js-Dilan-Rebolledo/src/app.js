require("dotenv").config()
const express = require('express')
//importar enrutador
const enrutador = require("./routers")

const app = express();
//importar el archivo enrutador de routers
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//importar el archivo enrutador (todas las rutas) de routers
app.use("/api", enrutador)

//endpoint raiz, de bienvenida
app.get("/",(req,res)=>{
    res.send("API, REST Estructurado en capas")
})

module.exports = app;