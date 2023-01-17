const db = require('../mongodb');

const company = new db.Schema({
    name: {
        type: String,
        required: true
    },
    api: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    }
});

module.exports = db.model('company', company);