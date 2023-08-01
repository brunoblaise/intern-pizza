const router = require('express').Router();
const signup = require('../controllers/user-signup.controller');
const login = require('../controllers/user-login.controller');

router.post('/signup', signup)
router.post('/login', login)






module.exports = router;