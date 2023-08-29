const express = require('express');
const http = require('http');

require('dotenv').config();

const app = express();
const router = require('./src/routers/router.cjs');
const { db } = require('./src/mongodb/factory.cjs');
const server = http.createServer(app);
const Database = require('./src/mongodb/persistencia.cjs');

this.db = new Database();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use('/', router);


this.db.connectToDatabase().then(() => {
    console.log('Database connected');

    const port = process.env.PORT
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    }
    )
}
).catch((error) => {
    console.log(error);
})

