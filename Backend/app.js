'use strict'

var express =  require('express');
var bodyParser = require('body-parser');

var app = express();
// rutas

// middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// rutas
app.get('/test',(req,res) => {
    res.status(200).send({
        message : "que pedo puto"
    });
});

// exportar
module.exports = app;