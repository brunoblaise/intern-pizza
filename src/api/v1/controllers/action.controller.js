const Order = require('../../../db/models/order.model');
const { Pizza, User } = require('../../../db/models/associations');
const sendMail = require('../../../services/gmail');

module.exports = async function (req, res) {
	try {
		/* const role = req.user.role;
		if (role !== 'admin') {
			return res.status(400).json({ msg: 'You are not admin' });
		}
		
 */
		const userId = req.user.id;
		const id = req.params.id;
		const { approved } = req.body;
		if (!id) {
			return res.status(400).json({ msg: 'Nothing here' });
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
			return res.status(400).json({ msg: 'Nothing here' });
		}
		const email = order.user.email;

		res.status(201).json({ view });
		sendMail(
			email,
			`Hi we wanted to tell ypu that your order has been ${approved}`,
			`Your order has been ${approved}`,
		);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
};
