const mongoose = require('mongoose');

const rutinasSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    rutina: {
        lunes: {
            manana: { type: [String], required: true, default: [] },
            tarde: { type: [String], required: true, default: [] },
            noche: { type: [String], required: true, default: [] }
        },
        martes: {
            manana: { type: [String], required: true, default: [] },
            tarde: { type: [String], required: true, default: [] },
            noche: { type: [String], required: true, default: [] }
        },
        miercoles: {
            manana: { type: [String], required: true, default: [] },
            tarde: { type: [String], required: true, default: [] },
            noche: { type: [String], required: true, default: [] }
        },
        jueves: {
            manana: { type: [String], required: true, default: [] },
            tarde: { type: [String], required: true, default: [] },
            noche: { type: [String], required: true, default: [] }
        },
        viernes: {
            manana: { type: [String], required: true, default: [] },
            tarde: { type: [String], required: true, default: [] },
            noche: { type: [String], required: true, default: [] }
        },
        sabado: {
            manana: { type: [String], required: true, default: [] },
            tarde: { type: [String], required: true, default: [] },
            noche: { type: [String], required: true, default: [] }
        },
        domingo: {
            manana: { type: [String], required: true, default: [] },
            tarde: { type: [String], required: true, default: [] },
            noche: { type: [String], required: true, default: [] }
        }
    }
});

const RutinasModel = mongoose.model('rutinas', rutinasSchema);

module.exports = RutinasModel;



