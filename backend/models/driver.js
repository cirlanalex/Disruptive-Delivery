const db = require('../mongodb');

const driver = new db.Schema({
    user_id: {
        type: String,
        required: true
    },
    vehicle_id: {
        type: String,
        required: true
    }
}, { versionKey: false });

module.exports = db.model('driver', driver);