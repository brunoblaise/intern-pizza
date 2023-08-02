const { Segments, Joi, celebrate } = require('celebrate');

module.exports = celebrate({
	[Segments.BODY]: Joi.object().keys({
		name: Joi.string().required(),
		description: Joi.string().required(),
		price: Joi.number().integer().required(),
		available: Joi.boolean().default(true),
		image: Joi.string().required(),
	}),
});
