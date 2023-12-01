//conection de la bd mongodb 'yo tengo siempre ejecutando mi bd en mi lap'
// La bd si funciona solo que no se visualiza en el programa de MONGO Compass
//Pero en el .env esta el link de como esta la conexion

const mongoose = require('mongoose');

const {Tutorias_mongodb_host, Tutorias_mongodb_database} = process.env;
const MONGODB_URI =  `mongodb://${Tutorias_mongodb_host}/${Tutorias_mongodb_database} `;

mongoose.connect(MONGODB_URI, {

})

    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
