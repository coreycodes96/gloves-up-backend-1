import { connect, closeDatabase, clearDatabase } from "../../../../db-handler";
import request from "supertest";
import app from "../../../../../app";
import forgotPasswordAddCode from "../../../../../src/services/api/account/forgotPassword/forgotPasswordAddCode.service";
import { user1 } from "../../../../data/users";
import createUser from "../../../../../src/services/api/account/createAccount/createUser.service";

describe("Request Forgot Password", () => {
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
          .then((res) => {
            expect(res).toBe("forgot password code added");
            done();
          })
          .catch((error) => done(error));
      })
      .catch((error) => done(error));
  });
});
