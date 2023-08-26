const router = require('express').Router();
const {postRutinas,getRutinas} = require('../controler/controler-products.cjs');

router.get('/rutinas/:dia',getRutinas)

router.post('/rutinas', postRutinas);


module.exports = router;