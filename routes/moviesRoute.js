var express = require('express');
var movieController = require('./../controller/movieController');

var movieRoute = express.Router();

movieRoute.route('')
    .get(movieController.get)
    .post(movieController.add);


module.exports = movieRoute;