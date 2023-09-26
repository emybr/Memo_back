const router = require('express').Router();
const {postRutinas,getRutinas} = require('../controler/controler-rutinas.cjs');


// trae las rutinas creadas por el usuario 

router.get('/rutinas/:email/:dia',getRutinas)

//crea rutinas

router.post('/rutinas', postRutinas);


module.exports = router;