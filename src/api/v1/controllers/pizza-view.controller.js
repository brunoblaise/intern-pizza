const Pizza = require('../../../db/models/pizza.model');
const pagination = require('../../../helpers/pagination');
const timeStamp = require('../../../helpers/timeStamp');

module.exports = async function (req, res, next) {
	try {
		const page = parseInt(req.query.page) || 1;
		const limit = parseInt(req.query.limit) || 10;

		const view = await pagination(Pizza, page, limit);
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
