const express = require('express');
const CategoriaRouter = express.Router();
const {postCreateCategoria} = require('../controler/controler-categoria.cjs')

//ruta para crear una categoria
CategoriaRouter.post('/crear', postCreateCategoria);

module.exports = CategoriaRouter;