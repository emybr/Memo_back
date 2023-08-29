const Database = require('../mongodb/persistencia.cjs');
const { createDocument, getDocument } = require('../mongodb/factory.cjs');
const RutinasModels = require('../mongodb/models/models-rutinas.cjs');

this.db = new Database();

class RutinasManager {
    constructor() {
        this.db = new Database();
        this.createDocument = createDocument;
        this.getDocument = getDocument;

    }

    async connectToDatabase() {
        await this.db.connectToDatabase();
    }

    async disconnect() {
        await this.db.disconnect();
    }

    async getProducts() {
        return await this.db.getProducts();
    }

    async getRutinas(dia) {
        return await this.getDocument('rutinas', dia);
    }

    async addRutina(rutina) {
        const newRutina = new RutinasModels(rutina);
        await this.createDocument('rutinas', newRutina);
    }
    
    async updateProduct(id, rutina) {
        const newRutina = new RutinasModels(rutina);
        await this.updateDocument('rutinas', newRutina);
    }

    async deleteProduct(id) {
        await this.deleteDocument('rutinas', id);
    }


   
}

module.exports = RutinasManager;