const bcrypt = require('bcrypt');
const User = require('../../../db/models/user.model');
const sendMail = require('../../../services/gmail');
const timeStamp = require('../../../helpers/timeStamp');
module.exports = async function (req, res, next) {
	try {
		const { name, email, hash } = await req.body;
		if (!name || !email || !hash) {
			return res.status(400).json({ msg: 'Please enter all fields', STATUS: 400, time: timeStamp() });
		}
		const user = await User.findOne({ where: { email } });

		if (user) return res.status(400).json({ msg: 'User already exists', STATUS: 400, time: timeStamp() });

		const salt = bcrypt.genSaltSync(10);
		const password = bcrypt.hashSync(hash, salt);

		const newUser = await User.create({
			name,
			email,
			password,
		});
		sendMail(
			email,
			'Welcome to the to world best place place',
			`Welcome  ${name} to the world best place place you can start by ordering a pizza`,
		);
		//const token = jwtGenerator(newUser.id, newUser.role);
		//TODO: create a resuble function to pass for the staus data time and many others
		res.status(201).json({ STATUS: 201, msg: 'User created', time: timeStamp(), data: newUser });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error', STATUS: 500, time: timeStamp(), problem: error});
		next(error);
	}
};
