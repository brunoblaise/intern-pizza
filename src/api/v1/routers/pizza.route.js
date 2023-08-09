const express = require('express');
const router = express.Router();
const pizza = require('../controllers/pizza-create.controller');
const auth = require('../middleware/auth');
const pizzaCreateValidator = require('../../../validators/post/pizza-create.validator');
const view = require('../controllers/pizza-view.controller');

router.post('/', pizzaCreateValidator, auth, pizza);
router.get('/view/', view);

module.exports = router;
