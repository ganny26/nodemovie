var movie = require('./../model/movieModel');

var get = function (req, res) {
    movie.find(function (err, movies) {
        if (err) {
            res.send(500);
            res.send('internal server error');
        }
        else {
            res.send(200);
            res.send(movies);
        }
    })
};

var add = function (req, res) {
    movie.add(function (err, movies) {
        if (err) {
            res.status(500);
            res.send('error while adding movie');
        }
        else {
            res.status(201);
            res.send(movies);
        }
    });
}

var getById = function (req, res) {
    movie.findById(req.params.id, function (err, movie) {
        if (err) {
            res.status(404);
            res.send('not found');
        }
        else {
            res.status(200);
            res.send(movie);
        }
    });
}

//module.exports = get;

module.exports = {
    get: get,
    add: add,
    getById: getById
}