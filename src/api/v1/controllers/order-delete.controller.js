const Order = require('../../../db/models/order.model');

module.exports = async function (req, res) {
	try {
		const role = req.user.id;

		const id = req.params.id;
		if (!id) {
			return res.status(400).json({ msg: 'Nothing here' });
		}
		const view = await Order.destroy({
			where: { id, role },
		});
		res.status(200).json({ view });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
};
