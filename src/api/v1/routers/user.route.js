const router = require('express').Router();
const signup = require('../controllers/user-signup.controller');
const login = require('../controllers/user-login.controller');
const SignValidator = require('../../../validators/post/user-signup.validator');
const LoginValidator = require('../../../validators/post/user-signup.validator');
router.post('/signup', SignValidator, signup);
router.post('/login', LoginValidator, login);

module.exports = router;
