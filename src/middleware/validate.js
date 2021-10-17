const {check} = require('express-validator');

module.exports =[
    check('name')
        .notEmpty().withMessage('Nombre requerido'),
//....................................................//
    check('email')
        .notEmpty().withMessage('Email requerido').bail()
        .isEmail().withMessage('Debe ingresar un email válido'),
//....................................................//
    check('color')
        .notEmpty().withMessage('color requerido'),
//....................................................//
    check('edad')
        .isInt().withMessage('la Edad dede ser un números'),
    
]