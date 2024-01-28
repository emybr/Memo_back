const Database = require('../mongodb/persistencia.cjs')
const { createDocument, getDocument,updateDocument } = require('../mongodb/factory.cjs')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const UserModels = require('../mongodb/models/user-models.cjs')
const MovilUserModels = require('../mongodb/models/models-movilUser.cjs')

// this.db = Database

class UserManager {
    constructor() {
        this.db = new Database
        this.createDocument = createDocument
        this.getDocument = getDocument
        this.updateDocument = updateDocument
    }

    async createUser(nombre, apellido, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = UserModels({
            nombre,
            apellido,
            email,
            password: hashedPassword
        });
        await this.createDocument('usersCollection', user)
    }

    async createUserMovil(email){
        const movilUser = MovilUserModels({
            email
        });
        const resultado = await this.createDocument('movilUserCollection', movilUser)
        return resultado;
    }

    async validateUser(email, password) {
        try {
            const user = await this.getDocument('userCollection', { email, password });
            return user !== null;
        } catch (e) {
            console.log(e);
        }
    }

    async setUserRole(email) {
        try {
            const user = await this.getDocument('usersCollection', { email });
            if (!user) {
                throw new Error('User not found');
            }
            user.role = 'user';
            await this.db.usersCollection.replaceOne({ email }, user);
            return user;
        } catch (e) {
            console.error(e);
        }
    }

    async validateUser(email, password) {
        try {
            const user = await this.getDocument('usersCollection', { email, password });
            return user !== null;
        } catch (e) {
            console.error(e);
        }
    }

    async getUserByField(field, value) {
        try {
            const query = { [field]: value };
            const user = await this.getDocument('usersCollection', query);
            return user;
        } catch (error) {
            console.error(error);
            throw new Error(`Error al obtener el usuario por ${field}: ${error.message}`);
        }
    }

    async setLastConnection(email) {
        try {
            const filter = { email }; 
            const update = { lastConnection: new Date() }; 

            await this.updateDocument('usersCollection', filter, update);
            console.log('El campo lastConnection ha sido actualizado correctamente');
        } catch (error) {
            console.error('Error al actualizar lastConnection:', error);
            throw new Error('Error al actualizar lastConnection');
        }
    }

}

module.exports = UserManager;