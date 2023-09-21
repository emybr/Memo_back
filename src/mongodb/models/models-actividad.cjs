const mongoose = require('mongoose')
//modificar para que se carguen las imagenes con los nombres de rachivos .png

const actividadSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true 
    },
    categoria:{
        type: String,
        requiered: true
    },
    pictogramas: {
        type: [String], 
        required:true
    }
});

const ActividadModel = mongoose.model('Actividad', actividadSchema);

module.exports = ActividadModel;
