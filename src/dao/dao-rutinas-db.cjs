const Database = require('../mongodb/persistencia.cjs');
const { createDocument, getDocument,updateDocumentValorFilter,getAllDocuments,getDocumentsByTwoValor,updateValueInDocumentThreeFilter  } = require('../mongodb/factory.cjs');
const RutinasModels = require('../mongodb/models/models-rutinas.cjs');

// this.db = new Database();

class RutinasManager {
    constructor() {
        this.db = new Database();
        this.createDocument = createDocument;
        this.getDocument = getDocument;
        this.updateDocumentValorFilter = updateDocumentValorFilter;
        this.getAllDocuments = getAllDocuments
        this.getDocumentsByTwoValor = getDocumentsByTwoValor
        this.updateValueInDocumentThreeFilter = updateValueInDocumentThreeFilter
    }

    async getRutinas(dia) {
        return await this.getDocument('rutinas', dia);             
    }
    
   
    async getAllrutinaParams (dia){
        return await this.getAllDocuments('rutinas', dia);             
    }
    
    async getRutinaTutorDia (email,dia){
        console.log(email,dia)
        return await this.getDocumentsByTwoValor('rutinas',email,dia)
    }


    async addRutina(rutina) {
        const newRutina = new RutinasModels(rutina);
        await this.createDocument('rutinas', newRutina);
    }
    
    async updateRutina(email,dia,horario,valor) {
        const result = await this.updateValueInDocumentThreeFilter('rutinas',email,dia,horario,valor);
        return result;
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
            const nuevaRutina = new RutinasModels(email);
            await this.createDocument('rutinas',nuevaRutina)   
        }
}

module.exports = RutinasManager;