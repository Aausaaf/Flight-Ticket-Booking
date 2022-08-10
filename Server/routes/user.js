const express = require('express');
const { createUser, loginUser, isLoggedIn, getUser, getAllUsers } = require('../handlers/user');

const userRouter = express.Router();

userRouter.post('/createUser', createUser);
userRouter.post('/loginUser', loginUser);
userRouter.post('/isLoggedIn', isLoggedIn);

userRouter.get('/getUser', getUser);
userRouter.get('/getAllUsers', getAllUsers);

module.exports = {userRouter};