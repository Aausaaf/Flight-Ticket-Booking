const jwt = require('jsonwebtoken');
const { Book } = require('../database/books');

//create a new post
const createBook = async(req, res) => {
    console.log("hfhtf")
    try {
        const {token} = req.headers;
        console.log(token)
        const decoded = jwt.verify(token, "uyfrurr67r76r7");
        console.log(decoded)
        const book = req.body;
        book.user = decoded._id;
       
        const newBook = await Book.create(book);
    
        return res.status(200).send({message: 'Book created successfully', book: newBook});
        // console.log(decoded);
    } catch (err) {
        res.status(500).json(err);
    }
}









// get all posts
const getAllbooks = async(req, res) => {
    try {
        const books = await Book.find();
        return res.status(200).send(books);
    } catch (err) {
        res.status(500).json(err);
    }
}

// get a post
const getBook = async(req, res) => {
    try {
        const title = req.params.title;
        const book = await Book.findById(title);
        if (!book) {
            return res.status(400).send({message: 'Book does not exist'});
        }
        return res.status(200).send(book);
    } catch (err) {
        res.status(500).json(err);
    }
}

// get posts by user
const getPostsByUser = async(req, res) => {
    try {
        // const id = req.params.userId;
        // const posts = await Post.find({user: id});
        const {token} = req.headers;
        const decoded = jwt.verify(token, "uyfrurr67r76r7");
        const posts = await Book.find({user: decoded._id}).populate('user');
        if (!posts) {
            return res.status(400).send({message: 'User does not have any posts'});
        }
        return res.status(200).send(posts);
    } catch (err) {
        res.status(500).json(err);
    }
}



module.exports = {
    createBook,
  
  
 
    getAllbooks,
    getBook,
    getPostsByUser,
   
}