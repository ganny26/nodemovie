var express = require('express');
var movieController = require('./../controller/movieController');

var movieRoute = express.Router();

movieRoute.route('')
    .get(movieController.get)
    .post(movieController.add);

movieRoute.route('/:id')
    .get(movieController.getById);


module.exports = movieRoute;