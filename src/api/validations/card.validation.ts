import * as Joi from 'joi';

export default {
	checkAccount: {
		body: Joi.object().keys({
			username: Joi.string().required()
		})
	}
};
