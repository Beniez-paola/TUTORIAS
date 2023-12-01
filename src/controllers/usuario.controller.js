const usuarioCtrl = {};

const usuario = require('../models/User');

// Muestra el form de registro de los usuarios
usuarioCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup');

}

usuarioCtrl.signup = (req, res) => {
    res.send('signup');
}

usuarioCtrl.renderLoginForm = (req, res) => {
    res.render('users/login');
}

usuarioCtrl.login = (req, res) => {
    res.send('login');
}

usuarioCtrl.logout = (req, res) => {
    res.send('logout');
}

module.exports = usuarioCtrl;
