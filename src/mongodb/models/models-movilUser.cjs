const mongoose = require('mongoose')

const movilUserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default:'user'
    },
    avatar: {
        type: String,
        default:'https://firebasestorage.googleapis.com/v0/b/imagenes-memo.appspot.com/o/files%2Fnene.png?alt=media&token=aee02c8c-a018-46c7-8f59-de06742645a7'
    },
    card: {
        type: [String],
        default:[]
    },
    lastconnection: {
        type: Date,
        default: Date.now
    }
});

const MovilUserModels = mongoose.model('movilUser', movilUserSchema);

module.exports = MovilUserModels;