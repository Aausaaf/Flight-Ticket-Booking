const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    From: {
        type: String,
        required: true
    },
    To: {
        type: String,
        required: true
    },
    Arrival: {
        type: Number,
        required: true
    },
    Departure: {
        type: Number,
        required: true
    },
    comapny_name:{
        type: String,
        required: true
    }
   
},{timestamps: true});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = {Flight};
