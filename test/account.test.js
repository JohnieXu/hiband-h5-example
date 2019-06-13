const account = require("../utils/account");
const assert = require("assert");

describe("account.js", () => {
  describe("getAccountInfo", () => {
    it("环境变量中不传递account password", (done) => {
      const res = account.getAccountInfo();
      assert.equal(res.account, undefined);
      assert.equal(res.password, undefined);
      done();
    });
    it("环境变量中传递account,不传password", (done) => {
      const res = account.getAccountInfo({ account: "admin" });
      assert.equal(res.account, "admin");
      assert.equal(res.password, undefined);
      done();
    });
  })
  
})