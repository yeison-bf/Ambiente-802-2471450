
const { Schema, model } = require('mongoose');

const UserModel = new Schema({

    nombre:{
        type:String,
        required:["El nombre es obligatorio!"]
    },

    apellidos:{
        type:String,
        required:["El apellido es obligatorio!"]
    },

    direccion:{
        type:String,
        required:["La dirección es obligatoria!"]
    },

    telefono:{
        type:Number,
        required:["El telefon es obligatorio!"]
    },

    estado:{
        type:Boolean,
        default:true
    }
})



module.exports = model('user', UserModel);