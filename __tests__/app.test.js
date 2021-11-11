const request = require('supertest');
const app = require('../app');

// Test Reference: https://www.npmjs.com/package/supertest

describe('Api testing', () => {
    const user = { id: '1', name: 'Username', login: 'user' };
    it('Get all users', (done) => {
        const expectedResponse = [{ id: 10004123, name: 'reza', username: 'reskipper', email: 'rezasaleki.09@gmail.com' }];
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                expect(res.body).toEqual(expectedResponse);
                done();
            });
    });
});