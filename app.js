const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express.Router();
const { errors } = require('celebrate');
app.use(express.json());

app.use('/', require('./src/api/v1/routers/index'));

//console.log('All models were synchronized successfully.');
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(errors());

module.exports = app;
