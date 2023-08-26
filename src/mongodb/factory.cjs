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



module.exports = {createDocument, getDocument};
