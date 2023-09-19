const mongoose = require('mongoose');

const rutinasSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    }, 
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mañana: [{
        horarioInicio:String,
        horarioFin:String,
        actividades:[String]
    }],
    tarde: [{
        horarioInicio:String,
        horarioFin:String,
        actividades:[String]
    }],
    noche: [{
        horarioInicio:String,
        horarioFin:String,
        actividades:[String]
    }],
    diaSemana: {
        type: String,
        required: true
    }
});



const RutinasModel = mongoose.model('rutinas', rutinasSchema);

module.exports = RutinasModel;


