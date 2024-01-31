const router = require('express').Router();
const {postRutinas,getRutinas,updateRutina, editRutinaController} = require('../controler/controler-rutinas.cjs');



// trae las rutinas creadas por el usuario 

router.get('/rutinas/:email',getRutinas)

//crea rutinas

// router.post('/rutinas', postRutinas);

//actualizo rutina 

router.post('/rutinas/update',updateRutina);

router.post('/rutinas/edit',editRutinaController);

module.exports = router;