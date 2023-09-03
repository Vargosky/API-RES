//importar dependencia
const connection = require("./database/connection.js")
const express = require("express");
const cors = require("cors")

//creamos el servidor

const app = express();
const port = 3001;

//consfigurar el cors

// app.use(cors());
// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3000', // Asegúrate de que esta dirección coincida con la de tu frontend
    credentials: true,
}));


//convertir todo a json

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//conexion a la bd

console.log("BIENVENIDO A LA API")
connection();

//rutas
const userRoutes = require("./routes/pathUser.js");
const mmppRoutes= require("./routes/routeMateriaPrima");
const subProductosRoutes = require("./routes/routeSubproducto");
const produccionRoutes = require("./routes/routeProduccion");


app.use("/api/user", userRoutes);
app.use("/api/mmpp/", mmppRoutes);
app.use("/api/subproducto/", subProductosRoutes);
app.use("/api/make/",produccionRoutes);






//hacer que escuche

app.listen(port, () => {
    console.log("servidor de node corriendo en el puerto " + port);
})

