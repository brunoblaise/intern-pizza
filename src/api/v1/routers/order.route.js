const express = require('express');
const app = express.Router();

const delet = require('../controllers/order-delete.controller');
const order = require('../controllers/order-create.controller');
const view = require('../controllers/order-view.controller');
const one = require('../controllers/one.controller');
const action = require('../controllers/action.controller');
const auth = require('../middleware/auth');

app.post('/place/:id', auth, order);
app.get('/view/', auth, view);
app.delete('/delete/:id', auth, delet);
app.get('/:id', auth, one);
app.put('/:id', auth, action);
module.exports = app;
