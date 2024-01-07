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
    const {email} = req.params;

    try {
        // console.log(filtro1,filtro2)
        // const rutinas = await rutinasManager.getRutinas(filtro); // Pasa el filtro como argumento
        const rutinas = await rutinasManager.getRutinaTutorDia(email);
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

async function updateRutina(req, res) {
    const { email,dia,horario,valor } = req.body
    console.log(email,dia,horario,valor)

    try {
        const rutinasDia = await rutinasManager.updateRutina(email,dia,horario,valor)
        if(rutinasDia){
            res.status(200).json({message: 'Rutina actualizada correctamente'})
        } else{
        res.status(404).json({message: 'no se encontro rutina para actualizar'})
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {  getRutinas,updateRutina};