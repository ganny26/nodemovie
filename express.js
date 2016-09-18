var express = require('express');
var moviesRoute = require('./routes/moviesRoute');
var mongoose = require('mongoose');
var app = express();

var database = mongoose.connect('mongodb://localhost/MovieDb');

app.listen(3000, function () {
    console.log('server running on port 3000 - express');
});

app.use('/movies', moviesRoute);