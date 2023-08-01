const express = require('express');
const app = express.Router();

const user = require('./src/api/v1/routers/user.route');
const pizza = require('./src/api/v1/routers/pizza.route');
const order = require('./src/api/v1/routers/order.route');
app.use('/auth', user);
app.use('/pizza', pizza);
app.use('/order', order);

module.exports = app;
