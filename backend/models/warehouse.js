const db = require('../mongodb');

const warehouse = new db.Schema({
    street_and_number: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    x_in_m: {
        type: Number,
        required: true
    },
    y_in_m: {
        type: Number,
        required: true
    },
    z_in_m: {
        type: Number,
        required: true
    }
}, { collection: 'warehouses', versionKey: false });

module.exports = db.model('warehouse', warehouse);