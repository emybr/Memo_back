const express = require('express');
const ActividadRouter =  express.Router();
const {postActividad,buscarActividadesPorCategoria,getUrlImagen, postSeleccion, getHorarioActividad} = require('../controler/controler-actividad.cjs')


//busco las actividades (mañana,tarde,noche)

ActividadRouter.get('/momentodeldia/:valor', getHorarioActividad);

//se pasan las imagenes en array con los nombres para buscarlos se usa la funcion buscar imagen
ActividadRouter.get('/imagenes/:parametros', getUrlImagen);

//ojo ver hace lo mismo que getHorario actividad

ActividadRouter.get('/:categoria/:valor', buscarActividadesPorCategoria);

//ruta para crear actividad

ActividadRouter.post('/post', postActividad);

//rupara para envio de imagenes seleccionadas desde front

ActividadRouter.post('/seleccion',postSeleccion);

//ruta para recibir palabra y devolver las actividades con las imagenes correspondientes

module.exports = ActividadRouter;