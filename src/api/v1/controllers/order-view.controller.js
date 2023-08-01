const Order = require('../../../db/models/order.model');
const { Pizza, User } = require('../../../db/models/associations');
module.exports = async function (req, res) {
	try {
		const userId = req.user.id;
		if (!userId) {
			return res.status(400).json({ msg: 'This order is not yours' });
		}
		const view = await Order.findAll({
			where: { userId },
			include: [Pizza, User],
		});
		res.status(200).json({ view });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
};
