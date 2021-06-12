process.env.NODE_ENV = "test";

const expect = require("chai").expect;
const request = require("supertest");

const app = require("../../app.js");

describe("POST /cart", () => {
  it("OK, POST product into cart", (done) => {
    request(app)
      .post("/cart")
      .set('Accept', 'application/vnd.burgers.api+json')
      .type("json")
      .send({ productId: "0.6178021536602232" })
      .then((res) => {
        const body = res.body;
        expect(body.isSuccess).to.equal(false);
        done();
      })
      .catch((err) => done(err));
  });

  it("Fail, product id is not existed", (done) => {
    request(app)
      .post("/cart")
      .set('Accept', 'application/vnd.burgers.api+json')
      .send({ productId: "0.61780215366022s32" })
      .then((res) => {
        const body = res.body;
        expect(body.isSuccess).to.equal(false);
        done();
      })
      .catch((err) => done(err));
  });
});
