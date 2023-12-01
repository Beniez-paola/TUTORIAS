//ejecuta el servidor o la aplicacion
require('dotenv').config();

const app = require('./server');
require('./database');



//app.get es en caso que el sitio donde se ejecute tenga su propio puerto
app.listen(app.get('port'), () =>{
    console.log('server on port', app.get('port'))
})