const { MongoClient } = require('mongodb');
const Database = require('../mongodb/persistencia.cjs');

this.db = new Database();


//inserta un documento en la coleccion especificada

async function createDocument(collection, document) {
    console.log(collection, document);
    try {

        if (!this.db[collection]) { // Check if the database is connected
            await this.db.connectToDatabase();
        }
        return await this.db[collection].insertOne(document);


    } catch (error) {
        console.error(error);
        throw error;
    }
}



async function getDocument(collection, document) {
    console.log(collection, document);
    try {
        if (!this.db[collection]) { // Check if the database is connected
            await this.db.connectToDatabase();
        }
        return await this.db[collection].findOne(document);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function updateDocument(collection, filter, update) {
    try {
        if (!this.db[collection]) {
            await this.db.connectToDatabase();
        }
        const result = await this.db[collection].updateOne(
            filter,
            { $set: update }
        );
        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar el documento');
    }
}



// async function getDocumentsByValue(collection, field, value) {
//     try {
//         if (!this.db[collection]) { // Verifica si la base de datos está conectada
//             await this.db.connectToDatabase();
//         }

//         const query = {};
//         query[field] = value;

//         return await this.db[collection].find(query).toArray();
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }

async function getDocumentsByValue(collection, field, value) {
    try {
        if (!this.db[collection]) { // Verifica si la base de datos está conectada
            await this.db.connectToDatabase();
        }

        const query = {};
        query[field] = value;

        return await this.db[collection].find(query).toArray();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getDocumentsByTwoValor(collection,value1,value2) {
    try {
        if (!this.db[collection]) { // Verifica si la base de datos está conectada
            await this.db.connectToDatabase();
        }

        // Realiza la búsqueda en la colección
        const result = await this.db[collection].findOne({
            email:value1,
            diaSemana:value2,
        });

        return result;
    } catch (error) {
        console.error("Error al buscar documentos:", error);
        throw error;
    }
}



async function getAllDocuments(collection) {
    try {
        if (!this.db[collection]) { // Verifica si la base de datos está conectada
            await this.db.connectToDatabase();
        }

        return await this.db[collection].find({}).toArray();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

//actualido por parametro y busco por email o campo 


async function updateDocumentValorFilter(collection, filter, fieldToUpdate, newValue) {
    try {
        if (!this.db[collection]) {
            await this.db.connectToDatabase();
        }

        // Crea un objeto que representa la actualización dinámica
        const update = {
            $set: { [fieldToUpdate]: newValue }
        };

        const result = await this.db[collection].updateOne(
            filter,
            update
        );

        return result;
    } catch (error) {
        console.error(error);
        throw new Error('Error al actualizar el documento');
    }
}


module.exports = { createDocument, getDocument, updateDocument, getDocumentsByValue, getAllDocuments, updateDocumentValorFilter, getDocumentsByTwoValor };
