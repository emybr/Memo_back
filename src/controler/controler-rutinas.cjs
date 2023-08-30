const { del } = require('express/lib/application');
const RutinasManager = require('../dao/dao-rutinas-db.cjs');
const rutinasManager = new RutinasManager();

async function getRutinas(req, res) {
    

    // Configura los encabezados CORS para el origen permitido
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    // Verifica si es una solicitud OPTIONS (preflight) y responde apropiadamente
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    // Recupera el día de la URL usando req.params
    const dia = req.params.dia;

    try {
        const filtro = { diaSemana: dia }; // Crea el filtro con el día recuperado
        const rutinas = await rutinasManager.getRutinas(filtro); // Pasa el filtro como argumento
        res.status(200).json(rutinas);
    } catch (error) {
        res.status(500).json(error);
    }
}



async function postRutinas(req, res) {
    try {
        const rutina = req.body;
        await rutinasManager.addRutina(rutina);
        const responseMessage = {
            msg: 'Rutina creada correctamente',
            rutina: rutina
        }
        res.status(200).json(responseMessage);
    } catch (error) {
        res.status(500).json(error);
    }
}


module.exports = { postRutinas, getRutinas };