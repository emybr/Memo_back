const Database = require('../mongodb/persistencia.cjs')
const ActividadModel = require('../mongodb/models/models-actividad.cjs')
const {createDocument,getDocumentsByValue,getAllDocuments, updateDocument,getAllDocumentsGenerico} = require('../mongodb/factory.cjs')

class ActividadManager{
    constructor(){
        this.db = new Database();
        this.createDocument = createDocument
        this.getDocumentsByValue = getDocumentsByValue
        this.getAllDocuments = getAllDocuments
        this.getupdateDocument = updateDocument
        this.getAllDocumentsGenerico = getAllDocumentsGenerico
    }

    async createActividad(actividad){
        console.log("actividadaaaaa",actividad)
        const newActividad = new ActividadModel(actividad);
        await this.createDocument('actividadCollection', newActividad);
    }
    
    async getActividaByvalue(categoria,valor) {
        try {
            const resultados = await this.getDocumentsByValue('actividadCollection', categoria,valor);
            return resultados;
        } catch (error) {
            console.error('Error al buscar actividades por categoría:', error);
            throw error; // Puedes propagar el error si es necesario
        }
    }
    
    async getAllActividadParams(query) {
		const allEvents = await this.getAllDocumentsGenerico('actividadCollection', query);
		return allEvents;
	}


    // async seleccionActividad(filter,update){
    //     try {
    //         const updateActividad = await this.updateDocument('actividadCollection',filter,update);
    //         return updateActividad;
    //     } catch (error){
    //         console.error('Error al actualizar actividad dao')
    //     }
    // }
}


module.exports = ActividadManager
