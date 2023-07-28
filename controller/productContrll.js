const mongoose = require('mongoose');
const product = require('../models/productModel');

const getProduct = async (req, res) => {
    try {
        const Product = await product.find({vidio_id: req.params.vidio_id});
        res.json(Product);
    } catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

const addProduct = async (req, res) => {
    try {
        const { vidio_id } = req.params;
        const { product_id, url, title, price } = req.body;
        const addProduct = new product({
            vidio_id,
            product_id,
            url,
            title,
            price
        })
        const saved = await addProduct.save();
        res.json({message: 'Product was added', saved});
    } catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
};

module.exports = {getProduct, addProduct};