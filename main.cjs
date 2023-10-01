const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const router = require('./src/routers/router.cjs');
const { db } = require('./src/mongodb/factory.cjs');
const server = http.createServer(app);
const Database = require('./src/mongodb/persistencia.cjs');
const  UserRouter  = require('./src/routers/user-router.cjs');
const UserManager = require('./src/mongodb/persistencia.cjs')
this.db = new Database();
const sessionConfig = require('./src/sessions/sessionConfig.cjs')
const passportConfig = require('./src/passport/passportConfig.cjs');
const ActividadRouter  = require('./src/routers/actividad-router.cjs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const CategoriaRouter = require('./src/routers/categoria-router.cjs');


sessionConfig(app);
passportConfig(app, UserManager);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

const corsOptions = {
    origin: 'http://192.168.100.2:3000', // Reemplaza con el dominio de tu sitio web
    origin: 'https://memo-front-iota.vercel.app', // Reemplaza con el dominio de tu sitio web 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204, // Responde solo con un código 204 si la solicitud fue exitosa
  };

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/', router);
app.use('/login',UserRouter);
app.use('/actividad',ActividadRouter)
app.use('/categoria', CategoriaRouter)
app.use('/public', express.static(path.join(__dirname, '../../public')));


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

