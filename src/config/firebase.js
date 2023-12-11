require('dotenv').config();

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'eventwave-ar.firebaseapp.com',
    projectId: 'eventwave-ar',
    storageBucket: 'eventwave-ar.appspot.com',
    messagingSenderId: '757346690931',
    appId: '1:757346690931:web:caecc58aa042b491b94706',
    measurementId: 'G-2QKZHDXHJC',
};

module.exports = config;
