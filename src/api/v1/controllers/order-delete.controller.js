//const { Pizza, User } = require('../../../db/models/associations');
const Order = require('../../../db/models/order.model');
const timeStamp = require('../../../helpers/timeStamp');

module.exports = async function (req, res, next) {
	try {
		//const userId = req.user.id;
		//const pizzaId = req.params.id;

		const {product} = req.body;
		//console.log(product)
		

		const order = await Order.bulkCreate([...product]);
		res.status(201).json({ STATUS: 201, data: order, time: timeStamp() });
	} catch (error) {
		res.status(500).json({ msg: 'Server error', STATUS: 500, time: timeStamp() });

		next(error);
	}
};
