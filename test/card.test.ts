/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import * as chai from 'chai';
import 'mocha';
import * as request from 'request';
import {copyFileSync} from "fs";

const {expect} = chai;
const serverUrl = 'http://localhost:4000/api/v1';
const token = '';

describe('Credit card test API', () => {
    before((done) => {
        done();
    });


    describe('when the request has a missing item in payload', () => {
        it('should return a 400 ok response and a single error', (done) => {

            const payload = {
                name: 'andrew',
                limit: 10
            };

            const dataToSend = {
                url: `${serverUrl}/card/add-card`,
                method: 'POST',
                json: payload,
                headers: {}
            };
            request(dataToSend, (err, response, body) => {

                expect(err).to.be.null;
                expect(body.status).to.equal(400);
                done();
            })

        });
    });

    describe('When sending invalid credit card number in payload', () => {
        it('should return invalid credit card 400', (done) => {

            const payload = {
                name: 'andrew',
                limit: 10,
                cardNumber: 123123123123
            };

            const dataToSend = {
                url: `${serverUrl}/card/add-card`,
                method: 'POST',
                json: payload,
                headers: {}
            };
            request(dataToSend, (err, response, body) => {
                expect(err).to.be.null;
                expect(body.status).to.equal(false);
                expect(body.code).to.equal(400);
                done();
            })

        });
    });


});
