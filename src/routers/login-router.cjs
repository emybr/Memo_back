const express = require('express');
const loginRouter =  express.Router();
const {login} = require('../controler/controler-login.cjs');


loginRouter.get('/', login);

module.exports = loginRouter;
