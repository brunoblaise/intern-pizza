const Order = require('../../../db/models/order.model');
const { Pizza, User } = require('../../../db/models/associations');
const timeStamp = require('../../../helpers/timeStamp');

//write a function to get one order
module.exports = async function (req, res, next) {
	try {
		const userId = req.user.id;
		const id = req.params.id;
		if (!userId) {
			return res.status(400).json({ msg: 'This order is not yours', STATUS: 400, time: timeStamp() });
		}
		const view = await Order.findOne({
			where: { userId, id },
			include: [Pizza, User],
		});
		if (view === null)
			return res.status(400).json({ msg: 'This order is deleted ', STATUS: 400, time: timeStamp() });
		res.status(200).json({ STATUS: 200, data: view, time: timeStamp() });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error', STATUS: 500, time: timeStamp() });
		next(error);
	}
};
