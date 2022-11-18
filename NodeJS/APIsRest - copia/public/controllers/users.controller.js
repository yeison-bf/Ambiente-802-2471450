const { put } = require("../routes/users.routes");
const User = require('../models/users.models');

const getUser = async (req, res) => {

    const getAllUser = await User.find();
    res.send({
        getAllUser
    }
)}

const postUser = async (req, res) => {
    
    const body = req.body;
    const user = new User(body);

    await user.save();

    res.send({
        "ok" : 200,
        user
    }

)}

const putUser = async(req, res) => {

    const paramts = req.params.id;
    const body = req.body;
    console.log(body)

    const userEdit = await User.findByIdAndUpdate(paramts,body);
    res.send({
        "ok" : 200,
        "id" : paramts,
        userEdit
    }
)}

const deleteUser = async (req, res) => {
    
    const paramts = req.params.id;
    const body = req.body;
    console.log(body)

    const userEdit = await User.findByIdAndDelete(paramts);
    res.send({
        "ok" : 200,
        "id" : "Eliminado"
    }
)}


module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}




