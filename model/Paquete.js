const { Schema, model } = require("mongoose");
const Joi = require('joi');
const ReciclajeSchema = Schema({
    idUser: {
        type:String,
        require:true
    },
    material:{
        type:String,
        require:true
    },
    cantidad:Joi.number().integer()
    ,
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    origen:{
        type:String,
        default: "hogar"
    },
    estado: {
        type:String,
        default: "abierto"
    },

    duenoId:{
        type:String,
        default:"default"
    }
});

module.exports = model("Reciclaje", ReciclajeSchema, "reciclajes");