const alumnoCtrl = {};

const alumno = require('../models/alumno');

// Para mostrar la plantilla del alumno para ingresar 
alumnoCtrl.renderalumnoform = (req, res) => {
    res.render('alumnosview/alumno')
}

//Para agregar datos del alumno
alumnoCtrl.createalumno = async (req, res) => {
    const { Nombre, Numero_control, carrera, semestre } = req.body;
    const newAlumno = new alumno({Nombre, Numero_control, carrera, semestre });
    //console.log(newAlumno)
    await newAlumno.save();
    req.flash('success_msg', 'Se añadio correctamente el alumno'); // muestra un mensaje de las acciones realizadas
    res.redirect('/alumno')
}

//mostrar todos los alumnos (CRUD)
alumnoCtrl.renderAlumno = async (req, res) => {
    const alumnos = await alumno.find().lean();
    res.render('alumnosview/profile.hbs', {alumnos:alumnos});
}

//Para editar formulario el alumno
//alumnoCtrl.renderEditform = async (req, res) => {
    //const alumnoss = await alumno.findById(req.params.id).lean();
    //console.log(alumnoss)
    //res.render('alumnosview/alumnoedit.hbs', {alumnoss:alumnoss});
//}

//Para editar el alumno
//alumnoCtrl.updateform = async(req, res) => {
    //const { Nombre, Numero_control, carrera, semestre } = req.body;
    //await alumno.findByIdAndUpdate(req.params.id, {Nombre, Numero_control, carrera, semestre });
    //req.flash('success_msg', 'Se actualizo correctamente el alumno'); 
    //res.redirect('/alumno')
//}

//Para eliminar el alumno
//alumnoCtrl.deletealumno = async (req, res) => {
    //await alumno.findByIdAndDelete(req.params.id);
    //req.flash('success_msg', 'Se elimino correctamente el alumno'); 
    //res.redirect('/alumno')
//}

module.exports = alumnoCtrl;