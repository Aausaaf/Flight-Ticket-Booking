const jwt = require('jsonwebtoken');
const { User } = require('../database/user');

//create a new user
const createUser = async(req, res) => {
    try {
        const user = req.body;
        // console.log(user);
        const check = await User.findOne({email: user.email});
        if (check) {
            return res.status(400).send({message: 'User already exists'});
        }
        let newUser = await User.create(user);
        newUser = newUser.toJSON();
        delete newUser.password;
        // console.log(newUser);
        return res.status(200).send(newUser);
    } catch (err) {
        return res.status(500).send(err);
    }
}

//login a user
const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email: email}).populate('password');
        // console.log(user);
        if (!user) {
            return res.status(400).send({message: 'User does not exist'});
        }
        const isMatch = (user.password === password);
        if (!isMatch) {
            return res.status(400).send({message: 'Incorrect password'});
        }
        const token = jwt.sign({_id: user._id}, "uyfrurr67r76r7", {expiresIn: '24h'});
        // const newUser = user.toJSON();
        // delete newUser.password;
        return res.status(200).send({token});
    } catch (err) {
        return res.status(500).send(err);
    }
}

//check if user is logged in
const isLoggedIn = async(req, res) => {
    try {
        const {token} = req.headers;
        const decoded = jwt.verify(token, "uyfrurr67r76r7");
        return res.status(200).send({decoded, token});
    } catch (err) {
        return res.status(500).send(err);
    }
}


//get a user
const getUser = async(req, res) => {
    try {
        const {token} = req.headers;
        const decoded = jwt.verify(token, "uyfrurr67r76r7");
        const user = await User.findById(decoded._id);
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send(err);
    }
}

//get all users
const getAllUsers = async(req, res) => {
    try {
        const users = await User.find();
        return res.status(200).send(users);
    } catch (err) {
        return res.status(500).send(err);
    }
}

module.exports = {
    createUser,
    loginUser,
    isLoggedIn,
   
    getUser,
    getAllUsers
}