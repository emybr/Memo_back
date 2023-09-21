const Database = require('../mongodb/persistencia.cjs');
const { createDocument, getDocument,updateDocumentValorFilter } = require('../mongodb/factory.cjs');
const RutinasModels = require('../mongodb/models/models-rutinas.cjs');

// this.db = new Database();

class RutinasManager {
    constructor() {
        this.db = new Database();
        this.createDocument = createDocument;
        this.getDocument = getDocument;
        this.updateDocumentValorFilter = updateDocumentValorFilter;
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

    async seleccionActividad(update,fieldToUpdate,newValue){
        try {
            const updateActividad = await this.updateDocumentValorFilter('rutinas',filter,update,fieldToUpdate,newValue);
            return updateActividad;
        } catch (error){
            console.error('Error al actualizar actividad dao')
        }
    }

    async createRutinas (email){
        const diasDeLaSemana = ['lunes','martes','miercoles','jueves','viernes','sabado','domingo']
        for (let index = 0; index < diasDeLaSemana.length; index++) {
            const dia = diasDeLaSemana[index];
            const documentoRutina = {
                email: email,
                diaSemana: dia
            };
            const nuevaRutina = new RutinasModels(documentoRutina);
            await this.createDocument('rutinas',nuevaRutina)   
        }
    }
}

module.exports = RutinasManager;