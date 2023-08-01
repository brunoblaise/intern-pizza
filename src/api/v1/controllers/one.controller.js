const Order = require('../../../db/models/order.model');
const { Pizza, User } = require('../../../db/models/associations');

//write a function to get one order
module.exports = async function (req, res) {
	try {
		const userId = req.user.id;
		const id = req.params.id;
		if (!userId) {
			return res.status(400).json({ msg: 'This order is not yours' });
		}
		const view = await Order.findOne({
			where: { userId, id },
			include: [Pizza, User],
		});
		if (view === null) return res.status(400).json({ msg: 'This order is deleted ' });
		res.status(200).json({ view });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
};
