const { Router } = require("express");
const router = Router();


const { renderIndex, renderDocentes } = require('../controllers/index.controller')


//jala la pagina principal del perfil del alumno
router.get("/", renderIndex);

router.get('/docentes', renderDocentes);

module.exports = router;