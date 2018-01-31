'use strict'
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || '3000';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port, function () {
    console.log('Server listening on ' + port )
});

module.exports = app

