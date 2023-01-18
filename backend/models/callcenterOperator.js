const db = require('../mongodb');

const callcenterOperator = new db.Schema({
    user_id: {
        type: String,
        required: true
    }
}, { versionKey: false });

module.exports = db.model('callcenterOperator', callcenterOperator);