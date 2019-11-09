import * as httpStatus from 'http-status';
import * as express from 'express';
import constants from '../../config/constants';
import customResponse from '../utils/response';
import * as fs from 'fs';
import * as path from "path";
import JSON = Mocha.reporters.JSON;


const { miscMessage, version } = constants;

class CardController {

	addCreditCard = async (req: express.Request, res: express.Response) => {
		try {
			const { name, cardNumber, balance, limit } = req.body;
            const database:any =  fs.readFileSync(path.join(__dirname , '../../database/database.json'),  'utf8' );
				const cardData={
                    name, cardNumber, balance, limit
				};
				//database.push(cardData);
			console.log(database);
			const result = {};
			// if (!result) {
			// 	return customResponse.setResponse(
			// 		res,
			// 		false,
			// 		httpStatus.BAD_REQUEST,
			// 		'Invalid parameter',
			// 		version.v1,
			// 		{
			// 			accountExist: false
			// 		}
			// 	);
			// }
			return customResponse.setResponse(
				res,
				true,
				httpStatus.OK,
				miscMessage.SUCCESS,
				version.v1,
                database
			);
		}
		catch (error) {
			console.error(error);
			return customResponse.setResponse(
				res,
				false,
				httpStatus.INTERNAL_SERVER_ERROR,
				miscMessage.FAILED,
				version.v1,
				error
			);
		}
	};

	listCreditCard = async (req: express.Request, res: express.Response) => {
        try {
            const { username } = req.body;
            const result = {};
            if (!result) {
                return customResponse.setResponse(
                    res,
                    false,
                    httpStatus.BAD_REQUEST,
                    'Invalid prameter',
                    version.v1,
                    {
                        accountExist: false
                    }
                );
            }
            return customResponse.setResponse(
                res,
                true,
                httpStatus.OK,
                miscMessage.SUCCESS,
                version.v1,
                {
                    accountExist: true
                }
            );
        }
        catch (error) {
            console.error(error);
            return customResponse.setResponse(
                res,
                false,
                httpStatus.INTERNAL_SERVER_ERROR,
                miscMessage.FAILED,
                version.v1,
                error
            );
        }
    }
}

export default new CardController();
