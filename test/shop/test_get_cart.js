process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /cart', () => {

  it('OK, getting cart', (done) => {
    request(app).get('/cart')
      .then((res) => {
        const body = res.body;
        done();
      })
      .catch((err) => done(err));
  });
})