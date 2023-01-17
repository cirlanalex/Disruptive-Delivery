const db = require('../mongodb');

const order = new db.Schema({
    id_order: {
        type: Number,
        required: true
    },
    id_company: {
        type: String,
        required: true
    },
    price_decided: {
        type: Number,
        required: true
    },
    send_date: {
        type: Date,
        required: true
    },
    get_date: {
        type: Date,
        required: true
    },
    x_in_mm: {
        type: Number,
        required: true
    },
    y_in_mm: {
        type: Number,
        required: true
    },
    z_in_mm: {
        type: Number,
        required: true
    },
    is_breakable: {
        type: Boolean,
        required: true
    },
    is_perishable: {
        type: Boolean,
        required: true
    },
    sender_info: {
        name: {
            type: String,
            required: true
        },
        street_and_number: {
            type: String,
            required: true
        },
        zip_code: {
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
        }
    },
    receiver_info: {
        name: {
            type: String,
            required: true
        },
        street_and_number: {
            type: String,
            required: true
        },
        zip_code: {
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
        }
    },
    state : {
        type: String,
        required: true
    },
    get_date: {
        type: Date,
        required: true
    },
    driver_id: {
        type: String,
        required: true
    },
    warehouse_id: {
        type: String,
        required: true
    }
});

module.exports = db.model('order', order);