const express = require("express");









const ruta = require(patch)
const rutaArchivo = ruta.join(__dirname, "datos.json")
//libreria para subir archivos
const multer = require ("multer")
//configurar el almacenamiento archivos
const almacenamiento = multer.diskStorage({
  desstination:(req,file,cb)=>{
    cb(null, "misImagenes/")
  },
  filename:(req,file,cb)=>{
    const extension = file.extname(File.originalname)
    cb(null, `${Date.now}${extension}`)
  }
})

const cargar = multer ({storage: almacenamiento})


//Endpoint para listar aprendices
app.get('/api/aprendices', (req, res) => {
  //Leer archivo json
  sistemaArchivo.readFile(rutaArchivo, "utf-8",(error, datos)=>{
    if(error){
      return res.status(500).json({Error: "No se puede leer archivo, o BD"})
    }
    const listaAprendices = JSON.parse(datos)
    res.status(200).json ({"mensaje":listaAprendices})
  })
})













//Endpoint para crear aprendices
app.post('/api/aprendices', (req, res) => {
  const datosAprendiz = req.body
  //agregar la ruta de la imagen
  datosAprendiz.imagen = req.file
  //Leer el archivo
  sistemaArchivo.readFile(rutaArchivo, "utf-8",(error, datos)=>{
    if(error){
      return res.status(500).json({Error: "No se puede leer archivo, o BD"})
    }
    const listaAprendices = JSON.parse(datos)
    //adicionar al  nuevo aprendiz a la lista
    listaAprendices.push(datosAprendiz)
    sistemaArchivo.writeFile(rutaArchivo, JSON.stringify(listaAprendices, null, 2), (error) =>{
      if(error){
        return res.status(500).json({Error})
      }
    })
    res.status(200).json ({"mensaje":"Aprendiz creado", "Datos aprendiz": datosAprendiz})
  })
})