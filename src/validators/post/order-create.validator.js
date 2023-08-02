const { celebrate, Segments, Joi } = require('celebrate');

module.exports = celebrate({
	[Segments.BODY]: {
		quantity: Joi.number().integer().required(),
	},
    [Segments.PARAMS]:{
        pizzaId: Joi.number().required()
    }
});
