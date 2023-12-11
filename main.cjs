
const express = require('express');
const http = require('http');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const admin = require('firebase-admin');
const app = express();
const router = require('./src/routers/router.cjs');
const { db } = require('./src/mongodb/factory.cjs');
const server = http.createServer(app);
const Database = require('./src/mongodb/persistencia.cjs');
const UserManager = require('./src/mongodb/persistencia.cjs')
this.db = new Database();
const sessionConfig = require('./src/sessions/sessionConfig.cjs')
const passportConfig = require('./src/passport/passportConfig.cjs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const UserRouter = require('./src/routers/user-router.cjs');
const ActividadRouter = require('./src/routers/actividad-router.cjs');
const CategoriaRouter = require('./src/routers/categoria-router.cjs');
const loginRouter = require('./src/routers/login-router.cjs');


sessionConfig(app);
passportConfig(app, UserManager);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

const corsOptions = {
    origin: 'http://192.168.100.2:5173', // Reemplaza con el dominio de tu sitio web
    origin: 'https://memo-front-iota.vercel.app', // Reemplaza con el dominio de tu sitio web 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    optionsSuccessStatus: 204, // Responde solo con un código 204 si la solicitud fue exitosa
};

const { private_key } = JSON.parse(process.env.FIREBASE_PRIVATE_KEY);

admin.initializeApp({
    credential: admin.credential.cert({
        type: process.env.FIREBASE_TYPE,
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key,
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: process.env.FIREBASE_AUTH_URI,
        token_uri: process.env.FIREBASE_TOKEN_URI,
        auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
        client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    }),
});


app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/', router);
app.use('/login', UserRouter);
app.use('/actividad', ActividadRouter)
app.use('/categoria', CategoriaRouter)
app.use('/login', loginRouter)
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

