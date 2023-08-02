const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.BODY]: {
		name: Joi.string().required(),
		email: Joi.string().required().email(),
		hash: Joi.string().min(8).max(15).required(),
	},
});
