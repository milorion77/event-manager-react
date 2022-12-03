const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const SchemaUser = new mongoose.Schema({
    FirstName: {
        type: String,
        required: [true, "Nombre es obligatorio."]
    },
    LastName: {
        type: String,
        required: [true, "Apellido es obligatorio."]
    },
    Email: {
        type: String,
        required: [true, "E-mail es obligatorio."],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Ingrese un e-mail válido."
        },
        unique: true //Unique no nos va a guardar cuando un email se repite PERO no es un validador
    },
    MobileNumber: {
        type: Number,
        required: [true, "tu numero de celular es obligatorio."]
    },
    Assistant: {
        type: String,
        required: [true, "Debes escoger un asistente."]
    },
    Password: {
        type: String,
        required: [true, "Password es obligatorio."],
        minlength: [8, "Password debe de tener al menos 8 caracteres"]
    },
    events: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Event"
    }]

}, {timestamps: true, versionKey: false})

//Atributo temporal
SchemaUser.virtual('confirmPassword')
    .get( ()=> this._confirmPassword )
    .set( value => this._confirmPassword = value );


//Se hace ANTES de validar el esquema de usuario
SchemaUser.pre('validate', function(next) {
    if(this.Password != this.confirmPassword) {
        this.invalidate('confirmPassword', 'Las contraseñas no coinciden');
    }

    next();
});

//Antes de guardar el usuario, encriptamos la contraseña
SchemaUser.pre('save', function(next){
    bcrypt.hash(this.Password, 10) //La cantidad de veces que encryptamos o hasheamos la contraseña
        .then(hash => {
            this.Password = hash;
            next();
        });
});

const User = mongoose.model("User", SchemaUser);
module.exports = User;