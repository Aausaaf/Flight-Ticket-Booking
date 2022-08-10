const { Flight } = require("../database/Allflight");


const getflight = async(req, res) => {
    try {
        
       
        const flight = await Flight.find();
        return res.status(200).send(flight);
    } catch (err) {
        return res.status(500).send(err);
    }
}
const Addflight = async(req, res) => {
    try {
        const flight = req.body;
        
       
        const newflight = await Flight.create(flight);
    
        return res.status(200).send({message: 'Flight Added created successfully', flight: newflight});
        // console.log(decoded);
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports={getflight,Addflight}