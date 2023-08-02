const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.BODY]: {
		approved: Joi.string().required(),
	},
	[Segments.PARAMS]: {
		id: Joi.number().required(),
	},
});
