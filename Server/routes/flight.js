const express = require('express');
const { getflight, Addflight } = require('../handlers/flight');

const flightrouter = express.Router()

flightrouter.get("/getflight",getflight)
flightrouter.post("/addflight",Addflight)

module.exports={flightrouter}