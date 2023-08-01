const Pizza = require('../../../db/models/pizza.model');

module.exports = async function (req, res) {
	try {
		const view = await Pizza.findAll();
		res.status(200).json({ view });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
};
