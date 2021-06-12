process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /products', () => {

  it('OK, getting products', (done) => {
    request(app).get('/products')
      .then((res) => {
        const body = res.body;
        done();
      })
      .catch((err) => done(err));
  });
})