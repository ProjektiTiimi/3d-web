import express from 'express';
import config from 'config';
import connect from './utils/connect';
import routes from './routes';

const port = config.get<number>('PORT');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//MIDDLEWARES
app.use(bodyParser.json());

//Import routes
const CustomersRoute = require('./Routes/customers');
app.use('/customers', CustomersRoute);


app.listen(port, async () => {
    console.log("Listening...");
    connect();
    routes(app);
});