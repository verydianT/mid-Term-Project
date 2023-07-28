const mongoose = require('mongoose');
const vidio = require('../models/vidioModel');

const findAll = async (req, res) => {
    try {
        const Vidio = await vidio.find();
        res.json(Vidio);
    } catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

const addVidio = async (req, res) => {
    try {
        const { imgURL } = req.body;
        const addVidio = new vidio({imgURL})
        const saved = await addVidio.save();
        res.json({message: 'Vidio was added', saved});
    } catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
};

module.exports = {findAll,addVidio};