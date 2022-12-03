const mongoose = require("mongoose");

const SchemaEvent = new mongoose.Schema({
    Name: {
        type: String,
        required: [true, "Debes Ingresar una pregunta"], // cuales son los lenguajes
        minLength: [3, "Debe tener al menos 3 caracteres"]
    },
    Description:{
        type: String,
        required: [true, "Debes Ingresar una respuesta"],
        minLength: [3, "Debe tener al menos 3 caracteres"]
    },
    Date:{
        type: String,
        required: [true, "Debes Ingresar una respuesta"],
        minLength: [3, "Debe tener al menos 3 caracteres"]
    },
    Ubication:{// depende de la api a usar 
        type: String,
        required: [true, "Debes Ingresar una respuesta"],
        minLength: [3, "Debe tener al menos 3 caracteres"]
    },
    Food:{
        type: String,
        required: [true, "Debes Ingresar una respuesta"],
        minLength: [3, "Debe tener al menos 3 caracteres"]
    },
    Decoration:{
        type: String
    },
    Music:{
        type: String
    },
    Phothos:{
        type: String
        // deberia ser array con dos campos ejem: ["fulanito el que lo va a hacer", false]
        // el nombre del que posiblemnte lo va a hacer y al lado check box de si ya lo consiguio o no 
        //y que si no le recuerde cada tanto 
    },
    Organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Users"
    },


},{timestamps: true , versionKey: false})





//timestamps: true es para createdAt y updatedAtrsionKe y: false es para eliminar un campo _v
const Events = mongoose.model("Events", SchemaEvent);
module.exports = Events;   
