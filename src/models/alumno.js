const {Schema, model} = require('mongoose');

const alumnoSchema = new Schema({
    Nombre: {
      type: String,
      required: true,
    },
    Numero_control: {
      type: String,
      required: true,
    },
    carrera: {
        type: String,
        enum: [
          'Arquitectura',
          'Lic. en Administración',
          'Contador Público',
          'Ing. Aeronáutica',
          'Ing. Ambiental',
          'Ing. Biomédica',
          'Ing. Bioquímica',
          'Ing. Civil',
          'Ing. en Diseño Industrial',
          'Ing. Electromecánica',
          'Ing. Electrónica',
          'Ing. en Gestión Empresarial',
          'Ing. Informática',
          'Ing. en Logística',
          'Ing. en Nanotecnología',
          'Ing. en Sistemas Computacionales',
          'Ing. en Tecnologías de la Información y Comunicaciones',
          'Ing. Industrial',
          'Ing. Química',
          'Ing. Mecánica'
        ], // Valores permitidos para carrera
        required: true,
    },
    semestre: {
        type: String,
        required: true,
    },
},
  {
    timestamps: true,
  }
);

module.exports = model('alumno',alumnoSchema);