const Pizza = require('../../../db/models/pizza.model');
const timeStamp = require('../../../helpers/timeStamp');

module.exports = async function (req, res) {
	try {
		const view = await Pizza.findAll();
		res.status(200).json({ STATUS: 200, data: view, time: timeStamp() });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error', STATUS: 500, time: timeStamp() });
	}
};
