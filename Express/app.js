const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PUERTO || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/", (_, res) => {
res.send("Aprendicez ficha 3407186");
});

app.get("/api/aprendices", (req,res) => {
    res.status(200).json({
        "mensaje":"LISTA DE APRENDICES"
    });
});


app.get("/api/aprendices/:id", (req,res) => {
    res.status(201).json({
        "mensaje":"Listar aprendiz"
    });
});

app.post("/api/aprendices", (req,res) => {
    res.status(201).json({
        "mensaje":"Crear aprendices"
    });
});

app.put("/api/aprendices/:id", (req,res) => {
    res.status(200).json({
        "mensaje":"Editar aprendices"
    });
});

app.delete("/api/aprendices/:id", (req,res) => {
    res.status(200).json({
        "mensaje":"Eliminar aprendices"
    });
});

app.post("/rutaJson", (req,res) => {
    const todosDatos = req.body
    const edad = req.doby.edad2
    if(edad >= 18){
        res.json({datosJson: "Es mayor de edad"});
    }else{
        res.json({mensaje: "Es menor de edad"})
    }
})

app.post("/rutaFormulario", (req,res) => {
    const todosDatos = req.body
    const programa = req.body.programa
    res.json({todosDatos: todosDatos, miPrograma: programa})
})

app.listen(port, () => {
console.log( `SERVIDOR: http://localhost:${port}`);
});