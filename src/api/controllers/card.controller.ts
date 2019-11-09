import * as httpStatus from 'http-status';
import * as express from 'express';
import constants from '../../config/constants';
import customResponse from '../utils/response';

const { miscMessage, version } = constants;

class CardController {
	// checkAccount = async (req: express.Request, res: express.Response) => {
	// 	try {
	// 		const { username } = req.body;
	// 		const result = await authService.checkAccount(username);
	// 		if (!result) {
	// 			return customResponse.setResponse(
	// 				res,
	// 				false,
	// 				httpStatus.BAD_REQUEST,
	// 				miscMessage.INVALID_USERNAME,
	// 				version.v1,
	// 				{
	// 					accountExist: false
	// 				}
	// 			);
	// 		}
	// 		return customResponse.setResponse(
	// 			res,
	// 			true,
	// 			httpStatus.OK,
	// 			miscMessage.SUCCESS,
	// 			version.v1,
	// 			{
	// 				accountExist: true
	// 			}
	// 		);
	// 	}
	// 	catch (error) {
	// 		console.error(error);
	// 		return customResponse.setResponse(
	// 			res,
	// 			false,
	// 			httpStatus.INTERNAL_SERVER_ERROR,
	// 			miscMessage.FAILED,
	// 			version.v1,
	// 			error
	// 		);
	// 	}
	// }
}

export default new CardController();
