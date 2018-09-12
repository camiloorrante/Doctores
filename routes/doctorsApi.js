var express = require('express');
var router = express.Router();
var models = require ('../models')

/* Obtener todos los doctores*/
router.get('/', function(req, res, next) {
    models.doctors.findAll({}).then(function(doctores){
        res.json(doctores);
    })
});

// crear un nuevo doctor
router.post('/', function(req, res, next){
//logica para insertar un nuevo doctor con sequelize
console.log(req)
    models.doctors.create({
        idHospital: req.body.idHospital,
        name: req.body.name,
        lastname: req.body.lastname,
        secondlastname: req.body.secondlastname,
        profesionalid: req.body.profesionalid,
        bcaddress: req.body.bcaddress,
    }).then(function(doctors){
        res.json(doctors);
    });
});

router.put('/', function(req, res, next){
//logica para hacer update a doctor con sequelize
});

//borrar un doctor de la BD
router.delete('/', function(req, res, next){

});


module.exports = router;