process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('POST /cart', () => {

  it('OK, POST add product to card', (done) => {
    request(app).post('/cart')
    .send({ productId: "0.6178021536602232" })
      .then((res) => {
        const body = res.body;
        done();
      })
      .catch((err) => done(err));
  });
})