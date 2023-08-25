const express = require('express');
const app = express.Router();
const auth = require('../middleware/auth');
const me  = require('../controllers/me.contoller')
app.post('/me', auth, me)


module.exports = app;