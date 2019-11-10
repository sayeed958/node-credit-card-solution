import * as Joi from 'joi';

export default {
	cardValidate: {
		body: Joi.object().keys({
			name: Joi.string().required(),
			cardNumber: Joi.string().length(10),
			limit: Joi.number().min(1).required()
		})
	},

};
//
//
// var luhnChk = ( (arr)=> {
//     return function (ccNum) {
//         var
//             len = ccNum.length,
//             bit = 1,
//             sum = 0,
//             val;
//
//         while (len) {
//             val = parseInt(ccNum.charAt(--len), 10);
//             sum += (bit ^= 1) ? arr[val] : val;
//         }
//
//         return sum && sum % 10 === 0;
//     };
// }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]));