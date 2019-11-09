import * as express from 'express';
import CardController from '../../controllers/card.controller';
import * as validate from 'express-validation';
import joi from '../../validations/card.validation';
const router = express.Router();
const {cardValidate}=joi;

/**
 * @api {post} /api/v1/add-card addCreditCard
 * @apiDescription Add credit card
 * @apiVersion 1.0.0
 * @apiName addCreditCard
 * @apiGroup Credit Card
 * @apiPermission public
 *
 * @apiHeader {String} Content-Type application/json
 *
 * @apiParam  {String}             name            name (Required)
 * @apiParam  {Number}             limit
 * @apiParam  {Number}             cardNumber      Card Number (Required)
 * @apiParam  {Number}             balance            balance (Required)
 *
 *
 * @apiSuccess (OK 200) {Number}     code         200=OK
 * @apiSuccess (OK 200) {Boolean}    status       true for success and false for failure
 * @apiSuccess (OK 200)  {String}    message      API Response message (Success)
 * @apiSuccess (OK 200) {Object[]}   result       result object
 * @apiSuccess (OK 200) {String}     appVersion   API version
 * @apiError (Bad Request 400)   {Boolean}    status    false
 * @apiError (Bad Request 400)   {String}     message   API Response message (cardNumber is required)
 * @apiError (Bad Request 400)   {Number}     code      400=Bad Request
 * @apiError (Bad Request 400)   {Object[]}   result    Blank Object
 * @apiError (Internal Server Error 500)   {Boolean}   status    false
 * @apiError (Internal Server Error 500)   {String}    message
 * API Response message (Internal Server Error)
 * @apiError (Internal Server Error 500)   {Number}    code      500=Internal Server Error
 * @apiError (Internal Server Error 500)   {Object[]}  result    Blank Object
 * @apiErrorExample {json} List error
  {
    "status": false,
    "code": 400,
    "message": "Invalid parameter"
    "appVersion": "v1",
    "result": {
     }
  }
 * @apiSuccessExample {json} Success-Response:
 {
  "status": true,
  "code": 200,
  "message": "SUCCESS",
  "appVersion": "v1.0.0",
  "result": []
}
 */
router
    .route('/add-card')
    .post(validate(cardValidate),CardController.addCreditCard);

/**
 * @api {post} /api/v1/list-card listCreditCard
 * @apiDescription List credit card
 * @apiVersion 1.0.0
 * @apiName listCreditCard
 * @apiGroup Credit Card
 * @apiPermission public
 *
 * @apiHeader {String} Content-Type application/json
 *
 *
 *
 * @apiSuccess (OK 200) {Number}     code         200=OK
 * @apiSuccess (OK 200) {Boolean}    status       true for success and false for failure
 * @apiSuccess (OK 200)  {String}    message      API Response message (Success)
 * @apiSuccess (OK 200) {Object[]}   result       result object
 * @apiSuccess (OK 200) {String}     appVersion   API version
 * @apiError (Internal Server Error 500)   {Boolean}   status    false
 * @apiError (Internal Server Error 500)   {String}    message
 * API Response message (Internal Server Error)
 * @apiError (Internal Server Error 500)   {Number}    code      500=Internal Server Error
 * @apiError (Internal Server Error 500)   {Object[]}  result    Blank Object
 * @apiErrorExample {json} List error
 {
   "status": false,
   "code": 400,
   "message": "Invalid parameter"
   "appVersion": "v1",
   "result": {
    }
 }
 * @apiSuccessExample {json} Success-Response:
 {
  "status": true,
  "code": 200,
  "message": "SUCCESS",
  "appVersion": "v1.0.0",
  "result": []
}
 */

router
	.route('/list-card')
	.post(CardController.listCreditCard);

export default router;
