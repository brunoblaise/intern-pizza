const User = require('../models/user.model');

module.exports = function (res, req, next) {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		return res.status(400).json({ msg: 'Please enter all fields' });
	}
	User.create({
		name,
		email,
		password,
	})
		.then((user) => {
			res.json(user);
		})
		.catch((err) => {
			res.status(500).json({ error: err });
		});
};
