const mongoose = require('mongoose');

const actividadSchema = new mongoose.Schema({
    categoria: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    filtro: {
        type: [String],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    flag: {
        type: Boolean,
        default: true
    }
});

const ActividadModel = mongoose.model('Actividad', actividadSchema);

module.exports = ActividadModel;

