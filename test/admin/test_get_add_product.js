process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /admin/add-product', () => {

  it('OK, getting admin products', (done) => {
    request(app).get('/admin/add-product')
      .then((res) => {
        const body = res.body;
        done();
      })
      .catch((err) => done(err));
  });
})