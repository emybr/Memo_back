

const { MongoClient } = require('mongodb');

class Database {
    constructor() {
        this.uri = `mongodb+srv://emybr82ar:eEexUL96aBEh3kMp@cluster0.lmkhatm.mongodb.net/?retryWrites=true&w=majority`;
        this.client = new MongoClient(this.uri, { useNewUrlParser: true, useUnifiedTopology: true });
        this.db = null;
    }

    async connectToDatabase() {
        try {
            await this.client.connect();
            this.db = this.client.db(); // No need to specify a specific database here
            this.rutinas = this.client.db().collection("rutinas");
            this.usersCollection = this.client.db("users").collection("users")
            this.actividadCollection = this.client.db("actividad").collection("actividad")
            this.categoriaCollection = this.client.db("categoria").collection("categoria")            
            console.log('Connected to database');
        } catch (error) {
            console.error(error);
        }
    }

    async disconnect() {
        await this.client.close();
        console.log('Disconnected from database');
    }
}

module.exports = Database;



