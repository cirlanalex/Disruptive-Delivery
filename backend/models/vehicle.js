const db = require('../mongodb');

const vehicle = new db.Schema({
    type: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    capacity_used: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    fragile: {
        type: Boolean,
        required: true
    },
    license_plate: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        required: true
    },
    needsMaintenance: {
        type: Boolean,
        required: true
    }
}, { versionKey: false });

module.exports = db.model('vehicle', vehicle);