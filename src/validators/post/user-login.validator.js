const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.BODY]: {
		email: Joi.string().required().email(),
		password: Joi.string().required(),
	},
});
