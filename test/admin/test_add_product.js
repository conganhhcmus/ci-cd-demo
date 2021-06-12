process.env.NODE_ENV = 'test';
var chai = require('chai');
chai.use(require('chai-dom'));
const expect = chai.expect;
const request = require('supertest');
const app = require('../../app.js');


describe('POST /admin/add-product', () => {
  

  it('OK, created a new admin product, redirect admin products page', (done) => {
    request(app).post('/admin/add-product')
      .send({  title:"Test",
			         imageUrl:"https://img4.goodfon.ru/original/640x480/d/6f/pirog-iagody-vypechka.jpg",
    		       price:10000,
    		       description:"test" })
      .redirects(0)
      .then((res) => {
        expect(res).to.be.html;
        done();
      })
      .catch((err) => done(err));
  });


})