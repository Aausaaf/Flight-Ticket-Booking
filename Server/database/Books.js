const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    Book_name: {
        type: String,
        required: true
    },
    Book_category: {
        type: String,
        required: true
    },
    Book_price: {
        type: Number,
        required: true
    },
    Book_description: {
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
