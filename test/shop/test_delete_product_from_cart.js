process.env.NODE_ENV = "test";

const expect = require("chai").expect;
const request = require("supertest");

const app = require("../../app.js");

describe("POST /cart-delete-item", () => {
  it("OK, POST delete cart item", (done) => {
    request(app)
      .post("/cart-delete-item")
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
      .post("/cart-delete-item")
      .send({ productId: "false" })
      .then((res) => {
        const body = res.body;
        expect(body.isSuccess).to.equal(false);
        done();
      })
      .catch((err) => done(err));
  });
});
