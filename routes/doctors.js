var express = require('express');
var router = express.Router();

/* Obtener todos los doctores*/
router.get('/', function(req, res, next) {
    var doctores = {doc: 'x'};
    res.json({doctores: JSON.stringify(doctores)});
});

// crear un nuevo doctor
router.post('/', function(req, res, next){
//logica para insertar un nuevo doctor con sequelize
});

router.put('/', function(req, res, next){
//logica para hacer update a doctor con sequelize
});

//borrar un doctor de la BD
router.delete('/', function(req, res, next){

});


module.exports = router;