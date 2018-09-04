var express = require('express');
var router = express.Router();

/* Obtener todos los hospitales*/
router.get('/', function(req, res, next) {
    var hosp = {doc: 'x'};
    res.json({doctores: JSON.stringify(hosp)});
});


module.exports = router;