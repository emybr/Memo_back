const router = require('express').Router();
const {postRutinas,getRutinas,updateRutina, editRutinaController, editRutinaControllerFromArray} = require('../controler/controler-rutinas.cjs');



// trae las rutinas creadas por el usuario 

router.get('/rutinas/:email',getRutinas)

//crea rutinas

// router.post('/rutinas', postRutinas);

//actualizo rutina 

router.post('/rutinas/update',updateRutina);

router.post('/rutinas/edit',editRutinaController);

router.post ('/rutinas/editArray', editRutinaControllerFromArray); 

module.exports = router;