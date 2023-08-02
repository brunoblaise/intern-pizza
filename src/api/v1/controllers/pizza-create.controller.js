const Pizza = require('../../../db/models/pizza.model');
module.exports = async  (req, res) => {
	try {
		
		const role = req.user.role;

		if (role !== 'admin') {
			return res.status(401).json({ msg: 'Not authorized' });
		}

		const { name, description, price, available, image } = req.body;
		if (!name || !description || !price || !image) {
			return res.status(400).json({ msg: 'Please enter all fields' });
		}

		const pizza = await Pizza.create({
			name,
			description,
			price,
			available,
			image,
		});
		res.status(201).json({ pizza });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
};
