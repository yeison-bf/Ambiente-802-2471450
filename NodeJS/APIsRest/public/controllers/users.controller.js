const { put } = require("../routes/users.routes");


const getUser = (req, res) => {
    res.send({
        "ok" : 200,
        "msg" : "Petición por Get"
    }
)}

const postUser = (req, res) => {
    
    const { nombre, apellidos, carrera } = req.body;

    res.send({
        "ok" : 200,
        nombre, 
        apellidos, 
        carrera
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




