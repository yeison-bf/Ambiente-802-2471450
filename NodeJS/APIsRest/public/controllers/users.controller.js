

const getUser = (req, res) => {
    res.send({
        "ok" : 200,
        "msg" : "Petición por Get"
    }
)}

const postUser = (req, res) => {
    res.send({
        "ok" : 200,
        "msg" : "Petición por Post"
    }
)}

const putUser = (req, res) => {
    res.send({
        "ok" : 200,
        "msg" : "Petición por Put"
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