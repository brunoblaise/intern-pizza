const express = require('express');
const app = express.Router();

const delet = require('../controllers/order-delete.controller');
const order = require('../controllers/order-create.controller');
const view = require('../controllers/order-view.controller');
const auth = require('../middleware/auth');

app.post('/place', auth, order);
app.get('/view/:pizzaId', auth, view);
app.delete('/delete/:id', auth, delet);
module.exports = app;
