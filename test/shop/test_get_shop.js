process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /shop/order', () => {


  it('OK, getting order', (done) => {
    request(app).get('/')
      .then((res) => {
        const body = res.body;
        done();
      })
      .catch((err) => done(err));
  });
})