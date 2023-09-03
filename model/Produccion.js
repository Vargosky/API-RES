const { Schema, model } = require("mongoose");
const Joi = require('joi');
const ProduccionSchema = Schema({
    idReceta: {
        type:String,
        require:true
    },
    cantidad:Joi.number().integer()
    ,
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
    maestro:{
        type:String,
        default: "Daniel"
    },
    estado: {
        type:String,
        default: "producido"
    },


});

module.exports = model("Produccion", ProduccionSchema, "producciones");