import { connect, closeDatabase, clearDatabase } from "../../../../db-handler";
import request from "supertest";
import app from "../../../../../app";
import { user1 } from "../../../../data/users";
import createUser from "../../../../../src/services/api/account/createAccount/createUser.service";
import forgotPasswordAddCode from "../../../../../src/services/api/account/forgotPassword/forgotPasswordAddCode.service";
import forgotPasswordCodeClear from "../../../../../src/services/api/account/forgotPassword/forgotPasswordCodeClear.service";

describe("Verify Forgot Password", () => {
  //Connect
  beforeAll(async () => await connect());

  //Clear database
  afterEach(async () => await clearDatabase());

  //Close database
  afterAll(async () => await closeDatabase());

  test("should add code to the forgotPasswordCode field", (done) => {
    createUser(user1, user1.activationCode)
      .then(() => {
        forgotPasswordAddCode(user1.email, 123456)
          .then(() => {
            forgotPasswordCodeClear(user1.email)
              .then((res) => {
                expect(res).toBe("forgot password code has been cleared");
                done();
              })
              .catch((error) => done(error));
          })
          .catch((error) => done(error));
      })
      .catch((error) => done(error));
  });
});
