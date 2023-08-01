const { Pizza, User } = require('../../../db/models/associations');
const Order = require('../../../db/models/order.model');

module.exports = async function (req, res) {
	try {
		const userId = req.user.id;
        const pizzaId = req.params.id;
		
		const {  quantity } = req.body;
		if (!pizzaId || !quantity) {
			return res.status(400).json({ msg: 'Please enter all fields' });
		}

		const order = await Order.create({
            userId,
            pizzaId,
			quantity,
            include: [Pizza, User]

        });
		res.status(201).json({ order });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server error');
	}
};
