process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /admin/edit-product', () => {

  it('OK, getting create product page', (done) => {
    request(app).get('/admin/edit-product/0.243387503779102')
      .then((res) => {
        expect(res).to.be.html;
        // expect(res.text).to.include('Test1');
        done();
      })
      .catch((err) => done(err));
  });
})