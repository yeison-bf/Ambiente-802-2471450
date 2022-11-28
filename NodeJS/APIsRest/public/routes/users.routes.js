
const { Router } = require('express');
const { check } = require('express-validator');

const { getUser, postUser, putUser, deleteUser, GetUserById} = require('../controllers/users.controller');
const { validator_paht } = require('../middlewares/validator-path');


const route = Router();

route.get('/', getUser);

route.post('/',[
    check('identificacion', 'La identificación no es aceptada').isNumeric(),
    check('identificacion', 'La identificación no tiene la longitud permitida').isLength({min:8, max:10}),
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('email', 'El email, no tiene el formato permitido').isEmail(),
    validator_paht
], postUser)

route.put('/:id', putUser)

route.delete('/:id', deleteUser)

route.get('/userById/:id', GetUserById)


module.exports = route;