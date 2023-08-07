const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express.Router();
const { errors } = require('celebrate');
const swaggerUi = require('swagger-ui-express');
const swaggerJson = require('./docs/swagger.json');
app.use(express.json());
const config = require('config');

console.log(config.get('development.username'));
app.use('/api/v1', require('./src/api/v1/routers/index'));

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJson));
//console.log('All models were synchronized successfully.');
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));
app.use(errors());

module.exports = app;
