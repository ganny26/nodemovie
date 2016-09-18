var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var movieSchema = new Schema(
    {
        title: String,
        year: Number,
        rating: Number,
        isReleased: {
            type: Boolean,
            default: true
        }
    }
);

module.exports = mongoose.model('Movie',movieSchema);