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

var updateById = function (req, res) {
    movie.findById(function (err, movies) {
        if (err) {
            res.status(500);
            res.send('update error');
        }
        else {
            movies.title = req.body.title;
            movies.rating = req.body.rating;
            movies.year = req.body.year;
            movies.isReleased = req.body.isReleased;

            movies.save(function (err) {
                if (!err) {
                    res.status(200);
                    res.send(movies);
                }
                else {
                    res.status(500);
                    res.send('failed to update');
                }
            });
        }

    })
}

module.exports = {
    get: get,
    add: add,
    getById: getById,
    updateById: updateById 
}