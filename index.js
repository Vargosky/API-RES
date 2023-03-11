//importar dependencia
const connection = require("./database/connection.js")
const express = require("express");
const cors = require("cors")

//creamos el servidor

const app = express();
const port = 3000;

//consfigurar el cors

app.use(cors());

//convertir todo a json

app.use(express.json());
app.use(express.urlencoded({extended:true}));


//conexion a la bd

console.log("BIENVENIDO A LA API")
connection();

//rutas
const userRoutes = require("./routes/pathUser.js");
const followRoutes = require("./routes/pathFollow.js");
const publicationRoutes = require("./routes/pathPublication.js")

app.use("/api/user",userRoutes);
app.use("/api/follow",followRoutes);
app.use("/api/publication",publicationRoutes);



//hacer que escuche

app.listen(port,()=>{
    console.log("servidor de node corriendo en el puerto "+port);
})

