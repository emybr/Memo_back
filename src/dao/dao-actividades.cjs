const Database = require('../mongodb/persistencia.cjs')
const ActividadModel = require('../mongodb/models/models-actividad.cjs')
const {createDocument,getDocumentsByValue,getAllDocuments, updateDocument} = require('../mongodb/factory.cjs')

class ActividadManager{
    constructor(){
        this.db = new Database();
        this.createDocument = createDocument
        this.getDocumentsByValue = getDocumentsByValue
        this.getAllDocuments = getAllDocuments
        this.getupdateDocument = updateDocument
    }

    async createActividad(actividad){
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
