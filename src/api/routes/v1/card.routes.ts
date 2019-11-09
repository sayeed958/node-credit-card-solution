import * as express from 'express';

const router = express.Router();


/**
 * @api {post} /api/v1/auth/check-account CheckAccount
 * @apiDescription check the user name is exist or not
 * @apiVersion 1.0.0
 * @apiName CheckAccount
 * @apiGroup Auth
 * @apiPermission public
 *
 * @apiHeader {String} Content-Type application/json
 *
 * @apiParam  {String}             username            User's username (Required)
 *
 *
 * @apiSuccess (OK 200) {Number}     code         200=OK
 * @apiSuccess (OK 200) {Boolean}    status       true for success and false for failure
 * @apiSuccess (OK 200)  {String}    message      API Response message (Success)
 * @apiSuccess (OK 200) {Object[]}   result       result object
 * @apiSuccess (OK 200) {String}     appVersion   API version
 * @apiError (Bad Request 400)   {Boolean}    status    false
 * @apiError (Bad Request 400)   {String}     message   API Response message (username is required)
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
    "message": "INVALID_USERNAME"
    "appVersion": "v1.0.0",
    "result": {
     }
  }
 * @apiSuccessExample {json} Success-Response:
 {
  "status": true,
  "code": 200,
  "message": "SUCCESS",
  "appVersion": "v1.0.0",
  "result": {
      "accountExist": true
  }
}
 */
//
// router
// 	.route('/check-account')
// 	.post(validate(checkAccount), authController.checkAccount);

export default router;
