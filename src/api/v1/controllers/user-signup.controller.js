const bcrypt = require('bcrypt');
const User = require('../../../db/models/user.model');
const sendMail = require('../../../services/gmail');
const jwtGenerator = require('../../../helpers/jwtGenerator');
module.exports = async function (req, res) {
	try {
		const { name, email, hash } = await req.body;
		if (!name || !email || !hash) {
			return res.status(400).json({ msg: 'Please enter all fields' });
		}
		const user = await User.findOne({ where: { email } });
		console.log('Users exist', user);
		if (user) return res.status(400).json({ msg: 'User already exists' });

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
		const token = jwtGenerator(newUser.id, newUser.role);
		res.status(201).json({ token });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
};
