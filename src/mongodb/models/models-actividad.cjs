const mongoose = require('mongoose')
//modificar para que se carguen las imagenes con los nombres de rachivos .png

const actividadSchema = new mongoose.Schema({
    categoria:{
        type: String,
        requiered: true
    },
    imageUrl: {
        type: String, 
        required:true
    },
    filtro: {
        type: [String], 
        required:true
    },
    email: {
        type: String, 
        required:true
    }
});

const ActividadModel = mongoose.model('Actividad', actividadSchema);

module.exports = ActividadModel;
