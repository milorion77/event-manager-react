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
        minLength: [3, "Debe tener al menos 3 caracteres"],
    },
    Date:{
        type: String,
        required: [true, "Debes Ingresar una respuesta"],
        minLength: [3, "Debe tener al menos 3 caracteres"],
    },
    Food:{
        type: String,
        required: [true, "Debes Ingresar una respuesta"],
        minLength: [3, "Debe tener al menos 3 caracteres"],

    },
    Decoration:{
        type: String,
        required: [true, "Debes Ingresar una respuesta"],
        minLength: [3, "Debe tener al menos 3 caracteres"],


    },
    Music:{
        type: String,
        required: [true, "Debes Ingresar una respuesta"],
        minLength: [3, "Debe tener al menos 3 caracteres"],


    },
    Phothos:{
        type: String,
        required: [true, "Debes Ingresar una respuesta"],
        minLength: [3, "Debe tener al menos 3 caracteres"],
        // deberia ser array con dos campos ejem: ["fulanito el que lo va a hacer", false]
        // el nombre del que posiblemnte lo va a hacer y al lado check box de si ya lo consiguio o no 
        //y que si no le recuerde cada tanto 


    },
    Organizer: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Users"
    },


},{timestamps: true , versionKey: false})



// SchemaEvent.pre('validate', function(next) {
//     if(this.status1 == false && this.status2 == false && this.status3 == false) {
//         this.invalidate('status', 'debes escoger la respuesta correcta');
//     }

//     next();
// });


//timestamps: true es para createdAt y updatedAtrsionKe y: false es para eliminar un campo _v
const Events = mongoose.model("Events", SchemaEvent);
module.exports = Events;   
