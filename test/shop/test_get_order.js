process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /orders', () => {

  it('OK, getting order', (done) => {
    request(app).get('/orders')
      .then((res) => {
        const body = res.body;
        expect(res.status).to.equal(200);
        done();
      })
      .catch((err) => done(err));
  });
})