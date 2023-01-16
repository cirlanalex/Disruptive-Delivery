const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

let jsonParser = bodyParser.json();

if (process.env.NODE_ENV !== 'production') {
    console.log('The server is running in development mode!');

    dotenv.config({path: './.env'});
}

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";
const HOST_TO_SHOW = HOST === "0.0.0.0" ? "localhost" : HOST;
const PORT_TO_SHOW = process.env.PORT_TO_SHOW || PORT;

app.use(jsonParser);
// app.use('/artists', routerArtist);
// app.use('/songs', routerSongs);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, HOST, () => {
    console.log('Backend server listening on http://' + HOST_TO_SHOW + ':' + PORT_TO_SHOW);
});