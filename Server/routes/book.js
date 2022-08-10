const express = require('express');
const {  getPostsByUser,  createBook, getAllbooks, getBook } = require('../handlers/book');

const postRouter = express.Router();

postRouter.post('/createBook', createBook);

postRouter.get('/getAllbooks', getAllbooks);
postRouter.get('/getPost/:title', getBook);
postRouter.get('/getPostsByUser', getPostsByUser);

module.exports = {postRouter};