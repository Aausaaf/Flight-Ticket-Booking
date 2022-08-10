const express = require('express');
const {  getPostsByUser,  createBook, getAllbooks, getBook } = require('../handlers/book');

const bookRouter = express.Router();

bookRouter.post('/addBook', createBook);

bookRouter.get('/getAllbooks', getAllbooks);
bookRouter.get('/getbook/:title', getBook);
bookRouter.get('/getbookByUser', getPostsByUser);

module.exports = {bookRouter};