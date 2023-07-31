const jwt = require('jsonwebtoken');

require('dotenv').config();

module.exports = function (req, res, next) {
	const token = req.header('token');

	if (!token) return res.status(403).json({ message: 'Auth Error' });

	try {
		const verify = jwt.verify(token, process.env.JWT_SECRET);
		req.user = verify.user;
	} catch (e) {
		res.status(400).json({ message: 'Invalid Token' });
	}
};
