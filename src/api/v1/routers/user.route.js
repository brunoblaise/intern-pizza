const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const user = require('../controllers/user.controller');


router.post('/signup', user)






module.exports = router;