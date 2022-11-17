const { put } = require("../routes/users.routes");
const User = require('../models/users.models');

const getUser = (req, res) => {
    res.send({
        "ok" : 200,
        "msg" : "Petición por Get"
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

const putUser = (req, res) => {

    const paramts = req.params;
    const body = req.body;

    res.send({
        "ok" : 200,
        "id" : paramts,
        body
    }
)}

const deleteUser = (req, res) => {
    res.send({
        "ok" : 200,
        "msg" : "Petición por Delete"
    }
)}


module.exports = {
    getUser,
    postUser,
    putUser,
    deleteUser
}




