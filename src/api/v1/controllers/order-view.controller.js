const Order = require('../../../db/models/order.model');
const { Pizza, User } = require('../../../db/models/associations');
module.exports = async function (req, res, next) {
	try {
		const userId = req.user.id;
		if (!userId) {
			return res.status(400).json({ msg: 'This order is not yours', STATUS: 400 });
		}
		const view = await Order.findAll({
			where: { userId },
			include: [Pizza, User],
		});
		res.status(200).json({ STATUS: 200, data: view, time: timeStamp() });
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error', STATUS: 500, time: timeStamp() });
		next(error);
	}
};
