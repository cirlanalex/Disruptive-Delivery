const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

if (process.env.NODE_ENV !== 'production') {
    env.config({path: './.env'});
}

const db = require('./mongodb');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.use(jsonParser);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, HOST, () => {
    console.log('Backend server started!');
});