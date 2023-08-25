const express = require('express');
const app = express.Router();
const auth = require('../middleware/auth');
const me = require('../controllers/me.controller');

app.post('/me', auth, me)


module.exports = app;