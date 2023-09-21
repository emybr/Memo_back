const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config();



const sessionConfig = (app) => {
    const store = MongoStore.create({
        mongoUrl: "mongodb+srv://emybr82ar:eEexUL96aBEh3kMp@cluster0.lmkhatm.mongodb.net/?retryWrites=true&w=majority",
        mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
        ttl: 60 * 60 * 24 * 7, // 1 week
        collectionName: 'sessions'

    });

    app.use(session({
        secret: 'secreto',
        resave: false,
        saveUninitialized: false,
        store: store,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week in milliseconds
            secure: false, // Set to true in a production environment with HTTPS
        }
    }));
};

module.exports = sessionConfig