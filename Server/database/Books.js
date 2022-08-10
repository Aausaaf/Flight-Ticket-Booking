const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    Flight_name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
},{timestamps: true});

const Book = mongoose.model('Book', bookSchema);

module.exports = {Book};
