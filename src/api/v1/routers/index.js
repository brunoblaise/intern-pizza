const user = require('./user.route');
const pizza = require('./pizza.route');
const order = require('./order.route');
const me = require('../me.route')
const express = require('express');
const router = express.Router();

router.use('/auth', user);
router.use('/pizza', pizza);
router.use('/order', order);
router.use('/verify', me)
module.exports = router;
