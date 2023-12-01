const {Router } = require('express')
const router = Router()

//, renderEditform, updateform, deletealumno
const { renderalumnoform, createalumno, renderAlumno } = require('../controllers/alumno.controller');

// Agregar dato de alumno
router.get('/alumno/add', renderalumnoform)

// Crear alumno
router.post('/alumno/new', createalumno)

//mostrar los datos del alumno
router.get('/alumno', renderAlumno)

// editar alumnos y  mostrar su form
//router.get('/alumno/:id', renderEditform)

//router.put('/alumno/:id', updateform)

//eliminar alumno
//router.delete('/alumno/delete/:id', deletealumno)


module.exports = router
