
const { Router } = require('express');
const { getUser, postUser, putUser, deleteUser} = require('../controllers/usersController')

const route = Router();

route.get('/', getUser);

route.post('/', postUser)

route.put('/', putUser)

route.delete('/', deleteUser)



module.exports = route;