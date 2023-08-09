const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.BODY]: {
		quantity: Joi.number().integer().required(),
	},
	[Segments.PARAMS]: {
		id: Joi.number().required(),
	},
});
