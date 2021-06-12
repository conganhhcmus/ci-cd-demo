process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /admin/add-product', () => {

  it('OK, getting create product page', (done) => {
    request(app).get('/admin/add-product')
      .then((res) => {
        expect(res).to.be.html;
        expect(res.text).to.include('Title');
        expect(res.statusCode).equals(200);
        done();
      })
      .catch((err) => done(err));
  });
})