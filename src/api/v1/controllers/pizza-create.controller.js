const Pizza = require('../../../db/models/pizza.model');
const timeStamp = require('../../../helpers/timeStamp');

module.exports = async (req, res, next) => {
	try {
		const role = req.user.role;
		const user = process.env.USER;
		if (role !== user) {
			return res.status(401).json({ msg: 'Not authorized', STATUS: 401, time: timeStamp() });
		}

		const { name, description, price, available, image } = req.body;
		if (!name || !description || !price || !image) {
			return res.status(400).json({ msg: 'Please enter all fields', STATUS: 400, time: timeStamp() });
		}

		const pizza = await Pizza.create({
			name,
			description,
			price,
			available,
			image,
		});
		res.status(201).json({ STATUS: 201, data: pizza, time: timeStamp() });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error', STATUS: 500, time: timeStamp() });
		next(error);
	}
};
