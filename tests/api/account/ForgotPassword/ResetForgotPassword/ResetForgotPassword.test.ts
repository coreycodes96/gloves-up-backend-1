import { connect, closeDatabase, clearDatabase } from "../../../../db-handler";
import request from "supertest";
import app from "../../../../../app";
import { user1 } from "../../../../data/users";
import createUser from "../../../../../src/services/api/account/createAccount/createUser.service";
import changeUsersPassword from "../../../../../src/services/api/account/forgotPassword/changeUsersPassword.service";

describe("Reset Forgot Password", () => {
  //Connect
  beforeAll(async () => await connect());

  //Clear database
  afterEach(async () => await clearDatabase());

  //Close database
  afterAll(async () => await closeDatabase());

  test("should change the users password", (done) => {
    createUser(user1, user1.activationCode)
      .then(() => {
        changeUsersPassword(user1.email, "test1234")
          .then((res) => {
            expect(res).toBe("password has now been changed");
            done();
          })
          .catch((error) => done(error));
      })
      .catch((error) => done(error));
  });
});
