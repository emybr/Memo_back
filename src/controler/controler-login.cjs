const config = require('../config/firebase.cjs');

 async function login(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    try {
        console.log('llego algo')
        return res.status(200).json(config);
    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = {login};