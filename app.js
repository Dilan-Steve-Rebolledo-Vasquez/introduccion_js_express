import express from 'express';
import "dotenv/config"

const app = express();
const port = process.env.PUERTO || 3000;

app.get("/", (_, res) => {
res.send("Aprendicez ficha 3407186 SENA CGMLTI");
});

app.get("/ruta1", (req, res)=>{
    //template string
    res.send(`<h1>Usando res.send</h1>`)
})

app.get("/ruta2", (req, res)=>{
    res.json({"dev":"node --watch app.js", "script":"node app.js"})
})

app.get("/ruta3/:nombre/:apellido", (req, res)=>{
    let nameUsuario = req.params.nombre
    let apellido = req.params.apellido
    res.json({"usuario": nameUsuario, "apellido":apellido})
})

app.get("/ruta4", (req, res)=>{
    const numero = req.query.phone || 3208054034
    const orden = req.query.orden || "sin orden"
    const pagina = req.query.pagina || 1
    res.send(`<h1>Listado aprendices</h1>
        <h2>El listado en orden: ${orden}</h2>
        <p>Pagina: ${pagina}</p>
        <h3>Numero: ${numero}</h3>
        `)
})

//Ejercicios

//1.Parametro simple unico
app.get("/saludo/:nombre", (req, res) => {
    const { nombre } = req.params
    if (nombre.length < 3) {
    return res.status(400).json({
        error: 'El nombre debe tener al menos 3 caracteres.'
    });
    }
    return res.status(200).send(`Hola ${nombre} bienvenido`);
});

//2.Parametro simple unico
app.get("/productos/:nombre", (req, res) => {
    const { nombre } = req.params
    return res.status(200).json({
    mensaje: `Producto: ${nombre}`,
    producto: {
        id: 101,
        nombre: nombre,
        cantidadStock: 45,
        precioUnitario: 30,
        categoria: 'Electrónica'
    }
    });
});

//3.Multiples parametros de la ruta
app.get("/productos/:categoria/:id", (req, res) => {
    const { categoria, id } = req.params
    return res.status(200).json({
    productoId: id,
    categoria: categoria,
    servidor: os.hostname() 
    });
});

app.listen(port, () => {
console.log( `Servidor en funcionamiento en el puerto: http://localhost:${port}`);
});