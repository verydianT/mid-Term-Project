const mongoose = require('mongoose');
const vidioSchema = new mongoose.Schema(
    {
        imgURL: {
            required: true,
            type: String,
        }
    }
);
module.exports = mongoose.model('Vidios', vidioSchema);