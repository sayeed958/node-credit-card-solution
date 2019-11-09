import * as Joi from 'joi';

export default {
	cardValidate: {
		body: Joi.object().keys({
			name: Joi.string().required(),
			cardNumber: Joi.string().required(),
			balance: Joi.string().required()
		})
	}
};
