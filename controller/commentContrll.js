const mongoose = require('mongoose');
const comment = require('../models/commentModel');

const getComment = async (req, res) => {
    try {
        const Comment = await comment.find({vidio_id: req.params.vidio_id});
        res.json(Comment);
    } catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

const addComment = async (req, res) => {
    try {
        const { vidio_id } = req.params;
        const { username, comment } = req.body;
        const addComment = new product({
            vidio_id,
            username,
            comment
        })
        const saved = await addComment.save();
        res.json({message: 'Comment was added', saved});
    } catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
};

module.exports = {getComment, addComment};