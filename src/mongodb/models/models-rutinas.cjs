const mongoose = require('mongoose');

const rutinasSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    rutina: {
        lunes: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }]
        },
        martes: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }]
        },
        miercoles: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }]
        },
        jueves: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }]
        },
        viernes: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }]
        },
        sabado: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }]
        },
        domingo: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }]
        }
    }
});

const RutinasModel = mongoose.model('rutinas', rutinasSchema);

module.exports = RutinasModel;
