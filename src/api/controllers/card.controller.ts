import * as httpStatus from 'http-status';
import * as express from 'express';
import constants from '../../config/constants';
import customResponse from '../utils/response';
import * as fs from 'fs';
import * as path from "path";


const { miscMessage, version } = constants;

class CardController {

	addCreditCard = async (req: express.Request, res: express.Response) => {
		try {
			const { name, cardNumber, limit } = req.body;

            const database= fs.readFileSync(path.join(__dirname , '../../database/database.json'),  'utf8' );

				const cardData={
                    name, cardNumber, balance:0, limit
				};
				let databaseParseData=JSON.parse(database);
            databaseParseData.push(cardData);

            fs.writeFileSync( path.join(__dirname , '../../database/database.json'), JSON.stringify( databaseParseData ) );

			return customResponse.setResponse(
				res,
				true,
				httpStatus.OK,
				miscMessage.SUCCESS,
				version.v1,
                databaseParseData
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
            const database= fs.readFileSync(path.join(__dirname , '../../database/database.json'),  'utf8' );

            const result = JSON.parse(database);
            if (!result) {
                return customResponse.setResponse(
                    res,
                    false,
                    httpStatus.BAD_REQUEST,
                    'Invalid request',
                    version.v1,
                    []
                );
            }
            return customResponse.setResponse(
                res,
                true,
                httpStatus.OK,
                miscMessage.SUCCESS,
                version.v1,
                result
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
