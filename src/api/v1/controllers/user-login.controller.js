const bcrypt = require('bcrypt');
const jwtGenerator = require('../../../helpers/jwtGenerator');

const User = require('../../../db/models/user.model');
const timeStamp = require('../../../helpers/timeStamp');

module.exports = async function (req, res, next) {
	try {
		const { email, password } = await req.body;
		if (!email || !password) {
			return res.status(400).json({ msg: 'Please enter all fields', STATUS: 400, time: timeStamp() });
		}
		const user = await User.findOne({ where: { email } });
		if (!user) return res.status(400).json({ msg: 'User does not exist', STATUS: 400, time: timeStamp() });
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials', STATUS: 400, time: timeStamp() });
		const token = jwtGenerator(user.id, user.role);
		res.status(200).json({ STATUS: 200, token, msg: 'Logged in', time: timeStamp(), DATA: user});
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error', STATUS: 500, time: timeStamp(), problem: error});

		next(error);
	}
};
