process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /shop/order', () => {


  it('OK, getting order', (done) => {
    request(app).get('/shop/order')
      .then((res) => {
        const body = res.body;
        expect(body.length).toBeGreaterThan(0);
        done();
      })
      .catch((err) => done(err));
  });
})