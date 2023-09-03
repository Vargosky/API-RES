const mongoose = require("mongoose");

const connection = async ()=>{

    const bdName = "Damasco";

    try {
        await mongoose.connect("mongodb+srv://saremvargas:Sarem1509@cluster0.j4tuv0s.mongodb.net/"+bdName);
        console.log("conectado correctamente a la BASE DE DATOS :"+bdName);
    } catch (error) {
        console.log(error);
        throw new error ("no se pudo conectar a base de datos: "+bdName);
    }


}

module.exports = connection;