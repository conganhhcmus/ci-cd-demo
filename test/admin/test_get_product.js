process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /admin/products', () => {

  it('OK, getting admin products', (done) => {
    request(app).get('/admin/products')
      .then((res) => {
        expect(res).to.be.html;
        expect(res.text).to.satisfy(function(text) { 
        	return (String(text).includes("No Products Found!") || String(text).includes("Edit"));
        });

        done();
      })
      .catch((err) => done("Load wrong page"));
  });
})