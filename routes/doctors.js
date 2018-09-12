var express = require('express');
var router = express.Router();
var models = require ('../models');
var request = require('request-promise');

/* Obtener todos los doctores*/
router.get('/', function(req, res, next) {
    request('http://localhost:3000/api/doctors').then((resp)=>{
        console.log(resp);
        res.render('doctoresList', {doctores: JSON.parse(resp) });
    });
});
router.get('/new', function(req, res, next){
    res.render('newDoctor');
});

router.get('/edit/:id', function(req, res, next){
      //  res.render('newDoctor', {doctores: JSON.parse(id)});
    res.json({id:req.params.id});
    models.doctores.find({
        where:{
            id: req.params.id
        }
    }).then(function (resp){
        if(resp){
            resp.updateAttributes({

            })
        }
    })
});


module.exports = router;