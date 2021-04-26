'use-strict'

var express = require('express');
var ProjectControlle = require('../controllers/project')

var api = express.Router();

api.get('/home',ProjectControlle.home);
api.post('/test',ProjectControlle.test);

module.exports =  api
