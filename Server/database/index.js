const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        let uri = "mongodb://localhost:27017/flightticket";
        // console.log(uri);
        await mongoose.connect(uri, { useNewUrlParser: true });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {connectDB};
