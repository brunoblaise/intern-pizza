const Order = require('../../../db/models/order.model');
const timeStamp = require('../../../helpers/timeStamp');

module.exports = async function (req, res) {
	try {
		const userId = req.user.id;

		const id = req.params.id;
		if (!id) {
			return res.status(400).json({ msg: 'Nothing here', STATUS: 400, time: timeStamp() });
		}
		const view = await Order.destroy({
			where: { id, userId },
		});
		res.status(200).json({ STATUS: 200, data: view, time: timeStamp()});
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ msg: 'Server error', STATUS: 500, time: timeStamp() });
	}
};
