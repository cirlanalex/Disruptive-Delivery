const db = require('../mongodb');

const review = new db.Schema({
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    product_id: {
        type: String,
        required: true,
        unique: true
    }
}, { versionKey: false });

module.exports = db.model('review', review);