const db = require('../mongodb');

const callcenterOperator = new db.Schema({
    name: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
});

module.exports = db.model('callcenterOperator', callcenterOperator);