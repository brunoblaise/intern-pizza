const Order = require('../../../db/models/order.model.js');
const { Pizza, User } = require('../../../db/models/associations');

require('dotenv').config();
const timeStamp = require('../../../helpers/timeStamp');
const pagination = require('../../../helpers/pagination.js');

module.exports = async function (req, res, next) {
	try {
		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 10;
		const role = req.user.role;
		const user = process.env.USER;
		if (role !== user) {
			return res
				.status(400)
				.json({ msg: 'You are not authorized to view all orders', STATUS: 400, time: timeStamp() });
		}

		/*  Order.findAll({
			include: [Pizza, User],
		}); */

		const view = await pagination(Order, Pizza, User, page, limit);
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
		res.status(500).json({ msg: 'Server error', STATUS: 500, time: timeStamp() });
		next(error);
	}
};
