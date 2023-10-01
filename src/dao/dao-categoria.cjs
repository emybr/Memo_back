const Database = require ('../mongodb/persistencia.cjs');
const { createDocument } = require('../mongodb/factory.cjs');
const  CategoriaModel  = require('../mongodb/models/models-categoria.cjs');

class CategoriaManager{
    constructor() {
        this.db = new Database
        this.createDocument = createDocument
    }


    async createCategoria(categoria) {
        const newCategoria = new CategoriaModel(categoria);
        await this.createDocument('categoriaCollection', newCategoria);
    }
}

module.exports = CategoriaManager;

