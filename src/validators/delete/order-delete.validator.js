const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.PARAMS]: {
		id:Joi.number().required(),
	},
});
