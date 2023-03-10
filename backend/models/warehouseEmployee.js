const db = require('../mongodb');

const warehouseEmployee = new db.Schema({
    user_id: {
        type: String,
        required: true
    },
    warehouse_id: {
        type: String,
        required: true
    }
}, { versionKey: false });

module.exports = db.model('warehouseEmployee', warehouseEmployee);