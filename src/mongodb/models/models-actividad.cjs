const mongoose = require('mongoose')


const actividadSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true 
    },
    categoria:{
        type: String,
        requiered: true
    },
    imagen: {
        type: String, 
        required:true
    }
});

const ActividadModel = mongoose.model('Actividad', actividadSchema);

module.exports = ActividadModel;
