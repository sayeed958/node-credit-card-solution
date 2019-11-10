import * as Joi from 'joi';

export default {
	cardValidate: {
		body: Joi.object().keys({
			name: Joi.string().required(),
			cardNumber: Joi.number().required(),
			limit: Joi.number().min(1).required()
		})
	}

};

