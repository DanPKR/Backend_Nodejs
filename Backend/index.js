'use strict'


// Inicia Conexion a MongoDb
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/portafolio')  URL Parser Deprecated
mongoose.connect('mongodb://localhost:27017/portafolio', { useNewUrlParser: true, useUnifiedTopology: true })
                .then(()=> {
                    console.log("MongoDb succeeded");
                    // Se levanta Servidor
                    app.listen(port,() => {
                        console.log("Server Running");
                    });
                })
                .catch(err => console.log(err));

// Termina Conexion a MongoDb