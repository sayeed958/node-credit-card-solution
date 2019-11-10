import * as httpStatus from 'http-status';
import * as express from 'express';
import constants from '../../config/constants';
import customResponse from '../utils/response';
import * as fs from 'fs';
import * as path from "path";
import * as luhnCheck from 'luhn';

const {miscMessage, version} = constants;

class CardController {

    addCreditCard = async (req: express.Request, res: express.Response) => {
        try {
            const {name, cardNumber, limit} = req.body;

            if (!luhnCheck.validate(cardNumber)) {
                return customResponse.setResponse(
                    res,
                    false,
                    400,
                    miscMessage.INVALID_CARD,
                    version.v1,
                    []
                );
            }
            const database = fs.readFileSync(path.join(__dirname, '../../database/database.json'), 'utf8');

            const cardData = {
                name, cardNumber, balance: 0, limit
            };
            let databaseParseData = JSON.parse(database);
            databaseParseData.push(cardData);

            fs.writeFileSync(path.join(__dirname, '../../database/database.json'), JSON.stringify(databaseParseData));

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
            const database = fs.readFileSync(path.join(__dirname, '../../database/database.json'), 'utf8');

            const result = JSON.parse(database);
            if (!result) {
                return customResponse.setResponse(
                    res,
                    false,
                    httpStatus.INTERNAL_SERVER_ERROR,
                    miscMessage.FAILED,
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
