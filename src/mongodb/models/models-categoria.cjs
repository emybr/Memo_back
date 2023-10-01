const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    categoria: {
        type: String,
        required: true
    },
    pictogramas:{
        type:[String]
    }
});



const CategoriaModel = mongoose.model('categoria', categoriaSchema);

module.exports = CategoriaModel;


