/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import * as chai from 'chai';
import 'mocha';
import * as request from 'request';

const { expect } = chai;
const serverUrl = 'http://localhost:3000/api/v1/user';
const token =	'';

describe('user test API', () => {
	before((done) => {
		console.log('before test case');
		done();
	});

	describe('Get User Profile', () => {
		it('Should Get User Profile Data', (done) => {
			const dataToSend = {
				url: `${serverUrl}/profile`,
				method: 'GET',
				headers: {
					Authorization: token
				}
			};
			request(dataToSend, (err, res, body) => {
				body = JSON.parse(body);
				expect(err).to.be.null;
				expect(body.status).to.equal(true);
				expect(body).to.haveOwnProperty('result');
				done();
			});
		});
	});
});
