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
const fileUpload = require('express-fileupload');


sessionConfig(app);
passportConfig(app, UserManager);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));
app.use(cors());
app.use(fileUpload());

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
//ver de cambiar la url base por api
app.use(bodyParser.json());
app.use('/api/', router);
app.use('/api/login', UserRouter);
app.use('/api/actividad', ActividadRouter)
app.use('/api/categoria', CategoriaRouter)
app.use('/api/login', loginRouter)
app.use('/api/public', express.static(path.join(__dirname, '../../public')));


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

