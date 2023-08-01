const express = require('express');
const app = express.Router();

const user = require('./src/api/v1/routers/user.route');

app.use('/auth', user);


module.exports = app;