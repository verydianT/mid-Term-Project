const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
    {
        vidio_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vidios',
            required: true,
        },
        product_id: {
            required: true,
            type: String,
        },
        url: {
            required: true,
            type: String,
        },
        title: {
            required: true,
            type: String,
        },
        price: {
            required: true,
            type: String,
        }
    }
);
module.exports = mongoose.model('Products', productSchema);