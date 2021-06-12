process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /admin/products', () => {

  it('OK, getting admin products', (done) => {
    request(app).get('/admin/products')
      .then((res) => {
        const body = res.body;
        done();
      })
      .catch((err) => done(err));
  });
})