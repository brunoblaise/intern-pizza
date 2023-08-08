module.exports = function (model, userId, Pizza, User) {
	switch (model.name) {
		case 'Order':
			return {
				where: { userId },
				include: [Pizza, User],
			};

		default:
			return {};
	}
};
