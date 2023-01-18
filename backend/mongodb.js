const moongoose = require('mongoose');

moongoose.set('strictQuery', false);

moongoose.connect('mongodb://root:' + process.env.DATABASE_PASSWORD + '@' + process.env.DATABASE_HOST + ':' + process.env.DATABASE_PORT + '/disruptive?authSource=admin'
    , {useNewUrlParser: true, useUnifiedTopology: true});
const db = moongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB!');
});

module.exports = moongoose;