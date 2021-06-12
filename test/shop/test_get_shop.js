process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../app.js');

describe('GET /', () => {


  it('OK, getting shop', (done) => {
    request(app).get('/')
      .then((res) => {
        const body = res.body;
        expect(res.status).to.equal(200);
        done();
      })
      .catch((err) => done(err));
  });

  it('Fail, getting shop not found', (done) => {
    request(app).get('/a')
      .then((res) => {
        const body = res.body;
        expect(res.status).to.equal(404);
        done();
      })
      .catch((err) => done(err));
  });
})