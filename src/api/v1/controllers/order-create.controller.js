const { Pizza, User } = require('../../../db/models/associations');
const Order = require('../../../db/models/order.model');
const timeStamp = require('../../../helpers/timeStamp');

module.exports = async function (req, res, next) {
	try {
		const userId = req.user.id;
		const pizzaId = req.params.id;

		const { quantity } = req.body;
		if (!pizzaId || !quantity) {
			return res.status(400).json({ msg: 'Please enter all fields', STATUS: 400, time: timeStamp() });
		}

		const order = await Order.bulkCreate([{
			userId,
			pizzaId,
			quantity,
			include: [Pizza, User],
		}]);
		res.status(201).json({ STATUS: 201, data: order, time: timeStamp() });
	} catch (error) {
		res.status(500).json({ msg: 'Server error', STATUS: 500, time: timeStamp() });

		next(error);
	}
};
