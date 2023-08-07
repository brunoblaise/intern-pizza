const Order = require('../../../db/models/order.model');
const { Pizza, User } = require('../../../db/models/associations');
const sendMail = require('../../../services/gmail');
const timeStamp = require('../../../helpers/timeStamp');

require('dotenv').config();

module.exports = async function (req, res) {
	try {
		const role = req.user.role;
		const user = process.env.USER;
		if (role !== user) {
			return res.status(400).json({ msg: 'You are not admin', STATUS: 400, time: timeStamp() });
		}

		const userId = req.user.id;
		const id = req.params.id;
		const { approved } = req.body;
		if (!id) {
			return res.status(400).json({ msg: 'Nothing here', STATUS: 400, time: timeStamp() });
		}

		const view = await Order.update(
			{
				approved,
			},
			{
				where: { userId, id },
				returning: true,
				plain: true,
			},
		);
		const order = await Order.findOne({
			where: { userId, id },
			include: [Pizza, User],
		});
		if (!order) {
			return res.status(400).json({ msg: 'Nothing here', STATUS: 400, time: timeStamp() });
		}
		const email = order.user.email;

		res.status(201).json({ STATUS: 201, data: view });
		sendMail(
			email,
			`Hi we wanted to tell ypu that your order has been ${approved}`,
			`Your order has been ${approved}`,
		);
	} catch (error) {
		res.status(500).json({ msg: 'Server error', STATUS: 500, time: timeStamp() });
	}
};
