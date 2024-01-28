const express = require('express');
const { postResisterUser,postLoginUser, postLoginTutor, postRegisterMovilUser } = require('../controler/controler-user.cjs');
const UserRouter = express.Router();


UserRouter.get('/users')

//ruta de logueo
UserRouter.post('/login', postLoginUser)

//crea usuario 
UserRouter.post('/tutor', postLoginTutor)
UserRouter.post('/register',postResisterUser)
UserRouter.post('/registerMovilUser', postRegisterMovilUser)

//

module.exports = UserRouter