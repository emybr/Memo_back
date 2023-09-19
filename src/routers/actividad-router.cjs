const express = require('express');
const ActividadRouter =  express.Router();
const {postActividad,buscarActividadesPorCategoria,getUrlImagen, postSeleccion} = require('../controler/controler-actividad.cjs')



ActividadRouter.get('/imagenes/:parametros', getUrlImagen);

ActividadRouter.get('/:categoria/:valor', buscarActividadesPorCategoria);

ActividadRouter.post('/post', postActividad);

ActividadRouter.post('/seleccion',postSeleccion)

module.exports = ActividadRouter;