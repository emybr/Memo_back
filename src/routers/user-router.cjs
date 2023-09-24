const express = require('express');
const { postResisterUser,postLoginUser, postLoginTutor } = require('../controler/controler-user.cjs');
const UserRouter = express.Router();


UserRouter.get('/users')

//ruta de logueo
UserRouter.post('/login', postLoginUser)

//crea usuario 
UserRouter.post('/tutor', postLoginTutor)

UserRouter.post('/register',postResisterUser)

//

module.exports = UserRouter