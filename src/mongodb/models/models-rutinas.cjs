const mongoose = require('mongoose');

const rutinasSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    }, 
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mañana: [{
        type: String,
        required: true
    }],
    tarde: [{
        type: String,
        required: true
    }],
    noche: [{
        type: String,
        required: true
    }],
    diaSemana: {
        type: String,
        required: true
    }
});



const RutinasModel = mongoose.model('rutinas', rutinasSchema);

module.exports = RutinasModel;


