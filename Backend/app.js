'use strict'

var express =  require('express');
var bodyParser = require('body-parser');

var app = express();
var routes = require('./routes/project')

// middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// rutas
// app.get('/test',(req,res) => {
//     res.status(200).send({
//         message : "que pedo puto"
//     });
// });

// app.post('/postest',(req,res) => {
//     console.log('/postest: ',req.body.msg)
//     res.status(200).send({
//         message : "que pedo puto"
//     });
// });

app.use('/api',routes);




// exportar
module.exports = app;