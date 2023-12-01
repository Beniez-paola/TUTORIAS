//importa las librerias que anteriormete fueron instaladas dentro del sistema y sus versiones
const express = require("express");
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

// inicializaciones
const app = express();

// settings (modulos)
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views')); // es es si sera multiplataforma linux o windows (rutas del archivo)
app.engine('.hbs',exphbs.engine({ //este es para que mande a llamar a nuestras plantillas que tenemos en esas dos carpetas
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'), //es base del proyecto jala lo que tiene
    partialsDir: path.join(app.get("views"), "partials"), // la plantilla de navegador esos dos siguen igual en todas las vistas (alumno,docentes,login)
    extname: '.hbs'
}));

app.set('view engine', '.hbs'); //motor de nuestras plantillas
// hbs - express handlebars usa igual base de html 

//Middlewares (peticiones)
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'SeRgIo21',
    resave: true,
    saveUninitialized: true
}))
app.use(flash());
// Global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg'); //este ayudara a mostrar los mensajes en todas las vistas(que sea visible para todos)
    next();
})

// Routes
//manda a llamar a las direcciones de los templates
app.use(require('./routes/index.routes'));
app.use(require('./routes/alumno.routes'));
app.use(require('./routes/usuario.routes'));

// static files 
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;





