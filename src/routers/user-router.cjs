const express = require('express');
const { postResisterUser,postLoginUser } = require('../controler/controler-user.cjs');
const UserRouter = express.Router();


UserRouter.get('/users')

//ruta de logueo
UserRouter.post('/login', postLoginUser)

//crea usuario 

UserRouter.post('/register',postResisterUser)


module.exports = UserRouter