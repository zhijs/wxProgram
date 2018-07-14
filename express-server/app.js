'use strict'
var mongoose = require('mongoose')
const express = require('express')
let dbConfig = require('./config/dbConfig')
let serverConfig = require('./config/serverConfig')
let router = require('./routers/index')
mongoose.connect(dbConfig.devlopment)
var app = require('./config/express')();
app.use(express.static('images'))
router(app)
app.listen(serverConfig.port);

console.log('server starting on Port: ' + serverConfig.port);