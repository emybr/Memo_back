const mongoose = require('mongoose');

const rutinasSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    rutina: {
        lunes: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: { type: [String], required: true, default: [] }
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: { type: [String], required: true, default: [] }
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: { type: [String], required: true, default: [] }
            }]
        },
        martes: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: { type: [String], required: true, default: [] }
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }]
        },
        miercoles: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }]
        },
        jueves: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false }
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }]
        },
        viernes: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }]
        },
        sabado: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }]
        },
        domingo: {
            manana: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }],
            tarde: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }],
            noche: [{
                pictograma: { type: [String], required: true, default: [] },
                flag: { type: Boolean, required: true, default: false },
                categoria: {type:[String], required: true, default:[]}
            }]
        }
    }
});

const RutinasModel = mongoose.model('rutinas', rutinasSchema);

module.exports = RutinasModel;
