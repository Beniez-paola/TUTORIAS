const { Router } = require('express');
const router = Router()

const { renderSignUpForm, signup, renderLoginForm, login, logout } = require('../controllers/usuario.controller');

//Aqui se va a mostrar el formulario de agregar un usuario
router.get('/users/signup', renderSignUpForm);

//Aqui se va a registrar al usuario
router.post('/users/sigunp', signup);

router.get('/users/login', renderLoginForm);

router.post('/users/login', login);

router.get('/users/logout', logout);

module.exports = router;