const express = require('express');
const app = express();
const env = require('dotenv');
const bodyParser = require('body-parser');
let jsonParser = bodyParser.json();
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
    env.config({path: './.env'});
}

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.use(cors());
app.use(jsonParser);

const routeCallcenterOperator = require('./routes/routeCallcenterOperator');
app.use('/callcenteroperators', routeCallcenterOperator);
const routeCompany = require('./routes/routeCompany');
app.use('/companies', routeCompany);
const routeDriver = require('./routes/routeDriver');
app.use('/drivers', routeDriver);
const routeOrder = require('./routes/routeOrder');
app.use('/orders', routeOrder);
const routeUser = require('./routes/routeUser');
app.use('/users', routeUser);
const routeVehicle = require('./routes/routeVehicle');
app.use('/vehicles', routeVehicle);
const routeWarehouse = require('./routes/routeWarehouse');
app.use('/warehouses', routeWarehouse);
const routeWarehouseEmployee = require('./routes/routeWarehouseEmployee');
app.use('/warehouseemployees', routeWarehouseEmployee);
const routeLogin = require('./routes/routeLogin');
app.use('/login', routeLogin);
const routeReview = require('./routes/routeReview');
app.use('/reviews', routeReview);


app.listen(PORT, HOST, () => {
    console.log('Backend server started!');
});