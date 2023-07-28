const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema(
    {
        vidio_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vidios',
            required: true,
        },
        username: {
            required: true,
            type: String,
        },
        comment: {
            required: true,
            type: String,
        },
        date: {
            required: true,
            type: Date,
            default: Date.now,
        }
    }
);
module.exports = mongoose.model('Comments', commentSchema);