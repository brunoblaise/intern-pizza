const options = require('../utils/options');
module.exports = function (model, userId, Pizza, User, page, limit) {
	const offest = (page - 1) * limit;
	options(model, userId, Pizza, User);
	return model.findAndCountAll({
		limit,
		offest,
		...options,
	});
};
