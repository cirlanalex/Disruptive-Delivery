const db = require('../mongodb');

const user = new db.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    employee: {
        type: Boolean,
        required: true
    }, 
    employee_type: {
        type: String
    }
}, { versionKey: false });

module.exports = db.model('user', user);