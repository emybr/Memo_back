const { session } = require('passport');
const ActividadManager = require('../dao/dao-actividades.cjs')
const actividadManager = new ActividadManager
const { buscarImagenesPorParametro } = require('../funcion/buscarImagen.cjs')
const RutinasManager = require('../dao/dao-rutinas-db.cjs')
const rutinasManager = new RutinasManager

async function buscarActividadesPorCategoria(req, res) {
    try {
        const categoriaBuscada = req.params.categoria; // Suponiendo que la categoría se pasa como parámetro en la URL
        const valorBuscado = req.params.valor;
        const actividadesPorCategoria = await actividadManager.getActividaByvalue(categoriaBuscada, valorBuscado);
        res.status(200).json(actividadesPorCategoria);
    } catch (error) {
        res.status(500).json(error);
    }
}


async function postActividad(req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    try {
        const actividad = req.body;
        await actividadManager.createActividad(actividad)
        const responseMessage = {
            msg: 'actividad creada correctamente',
            actividad: actividad
        }
        req
        res.status(200).json(responseMessage);
    } catch (error) {
        res.status(500).json(error);
    }
}

async function getUrlImagen(req, res) {
    // const parametro = req.params.valor;
    const parametros = req.params.parametros.split('&parametros=');
    console.log(parametros)

    try {
        const rutasImagenes = await buscarImagenesPorParametro(parametros);
        res.json({ imagenes: rutasImagenes });
    } catch (error) {
        res.status(404).json({ error: error });
    }
};

async function postSeleccion(req, res) {
    const email = session.email
    const imagenesSeleccionadas = req.body.imagenes;
    const horarioDia = req.body.horario
    const palabraSeleccionada = req.body.palabra;
    console.log(req.body)

    try {
        await rutinasManager.seleccionActividad(email, imagenesSeleccionadas, horarioDia)
        const responseMessage = {
            msg: 'actividad creada correctamente controler',
        }
        res.status(200).json(responseMessage);
    } catch (error) {
        res.status(500).json(error);
    }
};


//buscamos mañana,tarde o noche
async function getHorarioActividad(req, res) {
    const horarioDia = req.params.valor;
    const categoria = "categoria"
    console.log(horarioDia)

    try {
        
        const rutinas = await actividadManager.getActividaByvalue(categoria,horarioDia);
        const responseMessage = {
            msg: 'get actividad',
            actividades: rutinas // Aquí almacenamos los datos de la base de datos en la respuesta.
        };
        res.status(200).json(responseMessage);
    } catch (error) {
        res.status(500).json(error);
    }
}





module.exports = { postActividad, buscarActividadesPorCategoria, getUrlImagen, postSeleccion,getHorarioActividad, }