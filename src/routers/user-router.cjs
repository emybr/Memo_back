const express = require('express');
const { postResisterUser,postLoginUser, postLoginTutor, postRegisterMovilUser, updateUser, getUserMovil } = require('../controler/controler-user.cjs');
const UserRouter = express.Router();


UserRouter.get('/users/:email', getUserMovil)

//ruta de logueo
UserRouter.post('/login', postLoginUser)

//crea usuario 
UserRouter.post('/tutor', postLoginTutor)
UserRouter.post('/register',postResisterUser)
UserRouter.post('/registerMovilUser', postRegisterMovilUser)

//update
UserRouter.post('/update/:email',updateUser)

module.exports = UserRouter