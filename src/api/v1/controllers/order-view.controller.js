const Order = require('../../../db/models/order.model');
const { Pizza, User } = require('../../../db/models/associations');
const pagination = require('../../../helpers/pagination');
const timeStamp = require('../../../helpers/timeStamp');
module.exports = async function (req, res, next) {
	try {
		const userId = req.user.id;
		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 10;

		if (!userId) {
			return res.status(400).json({ msg: 'This order is not yours', STATUS: 400 });
		}

		/*  await Order.findAndCountAll({
			limit,
			offset,
			where: { userId },
			include: [Pizza, User],
		}); */
		const view = await pagination(Order, userId, Pizza, User, page, limit);
		res.status(200).json({
			STATUS: 200,
			data: view,
			time: timeStamp(),
			page,
			limit,
			totalPages: Math.ceil(view.count / limit),
			totalItems: view.count,
		});
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error', STATUS: 500, time: timeStamp() });
		next(error);
	}
};
