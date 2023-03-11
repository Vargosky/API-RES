const mongoose = require("mongoose");

const connection = async ()=>{

    const bdName = "mi_redsocial";

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/"+bdName);
        console.log("conectado correctamente a la BASE DE DATOS :"+bdName);
    } catch (error) {
        console.log(error);
        throw new error ("no se pudo conectar a base de datos: "+bdName);
    }


}

module.exports = connection;