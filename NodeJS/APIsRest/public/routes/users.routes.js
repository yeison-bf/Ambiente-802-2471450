
const { Router } = require('express');
const { check } = require('express-validator');
const { validatorPath, EmailExisting, IdentificationExisting } = require('../middlewares/validator')

const { getUser, postUser, putUser, deleteUser, GetUserById} = require('../controllers/usersController');


const route = Router();

route.get('/', getUser);

route.post('/', [ 
    check('identificacion', 'El documento, no tiene un tipado aceptado').isInt(),
    check('identificacion', 'El documento es requerido').not().isEmpty(),
    check('identificacion', 'Al documento, se espera una longitud minima de 8 caracteres y maxima de 10 caracteres').isLength({min:8, max:10}),
    check('identificacion').custom ( IdentificationExisting ),
    check('nombre', 'El nombre es requerido').not().isEmpty(),
    check('apellidos', 'El apellido es requerido').not().isEmpty(),
    check('direccion', 'La irección es requerida').not().isEmpty(),
    check('email', 'El email no es aceptable').isEmail(),
    check('email').custom( EmailExisting ),
    check('password', 'La contraseña debe tener minimo 8 caracteres').isLength({min:8}),
    check('role', 'El rol asignado no es válido').isIn(['EMPLEADO', 'CLIENTE']),
    validatorPath
], postUser);

route.put('/:id', putUser);

route.delete('/:id', deleteUser);

route.get('/userById/:id', GetUserById);


module.exports = route;


