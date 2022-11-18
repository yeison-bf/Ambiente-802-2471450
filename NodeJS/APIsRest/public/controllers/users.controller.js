
const bcryptjs = require('bcryptjs');

const User = require('../models/users.models');

const getUser = async (req, res) => {

    const allUsers = await User.find();

    res.send({
        "ok" : 200,
        allUsers
    }
)}

const postUser = async (req, res) => {
    

    const { identificacion, nombre, apellidos, direccion, telefono, usuario, password } = req.body;
    const user = new User({ identificacion, nombre, apellidos, direccion, telefono, usuario, password });

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    await user.save();

    res.send({
        "ok" : 200,
        user
    }

)}

const putUser = async (req, res) => {

    const paramts = req.params.id;
    const { identificacion, nombre, apellidos, direccion, telefono, ususario, password } = req.body;

    const userUpdate = await User.findByIdAndUpdate(paramts, {identificacion, nombre, apellidos, direccion, telefono, ususario, password});

    res.send({
        "ok" : 200,
        "msg": "Usuario actualizado exitosamente" 
    }
)}

const deleteUser = async (req, res) => {

    const id_user = req.params.id; 
    // const deleteUser = await User.findByIdAndDelete( id_user);

    const estado  = false;

    const userUpdate = await User.findByIdAndUpdate(id_user, {estado});


    res.send({
        "ok" : 200,
        "msg" : "Usuario eliminado"
    }
)}


module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}




