const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
       
        
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    files: {
        type: [String]
    },
    lastconnection: {
        type: Date,
        default: Date.now
    }
});

const UserModels = mongoose.model('User', userSchema);

module.exports = UserModels;