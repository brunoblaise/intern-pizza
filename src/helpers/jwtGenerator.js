const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(id, role) {
	const payload = {
		user: {
			id,
            role,
		},
	};

	return jwt.sign(payload, process.env.JWT, { expiresIn: '2h' });
}



module.exports = jwtGenerator;
