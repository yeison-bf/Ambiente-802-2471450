
const { Router } = require('express');
const { getUser, postUser, putUser, deleteUser} = require('../controllers/users.controller')

const route = Router();

route.get('/', getUser);

route.post('/', postUser)

route.put('/:id', putUser)

route.delete('/:id', deleteUser)



module.exports = route;