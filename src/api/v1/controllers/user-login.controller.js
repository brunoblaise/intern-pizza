const bcrypt = require('bcrypt');
const jwtGenerator = require('../../../helpers/jwtGenerator');

const User = require('../../../db/models/user.model');

module.exports = async function (req, res, next) {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ msg: 'Please enter all fields' });
		}
		const user = await User.findOne({ where: { email } });
		if (!user) return res.status(400).json({ msg: 'User does not exist' });
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
		const token = jwtGenerator(user.id, user.role);
		res.status(200).json({ token });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
};
