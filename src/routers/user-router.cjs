const express = require('express');
const { postResisterUser,postLoginUser } = require('../controler/controler-user.cjs');
const UserRouter = express.Router();


UserRouter.get('/users')

UserRouter.post('/login', postLoginUser)

UserRouter.post('/register',postResisterUser)


module.exports = UserRouter