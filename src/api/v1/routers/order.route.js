const express = require('express');
const app = express.Router();
const OrderPutValidator = require('../../../validators/put/order-put.validator');
const OrderCreateValidator = require('../../../validators/post/order-create.validator');
const delet = require('../controllers/order-delete.controller');
const order = require('../controllers/order-create.controller');
const view = require('../controllers/order-view.controller');
const one = require('../controllers/one.controller');
const action = require('../controllers/action.controller');
const auth = require('../middleware/auth');
const OneValidator = require('../../../validators/get/One.controller');
const OrderDeleteValidator = require('../../../validators/delete/order-delete.validator');

app.post('/place/:id', OrderCreateValidator, auth, order);
app.get('/view/', auth, view);
app.delete('/delete/:id', OrderDeleteValidator, auth, delet);
app.get('/:id', OneValidator, auth, one);
app.put('/:id', OrderPutValidator, auth, action);
module.exports = app;
