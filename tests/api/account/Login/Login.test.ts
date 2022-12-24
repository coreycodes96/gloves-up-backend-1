import { connect, closeDatabase, clearDatabase } from "../../../db-handler";
import request from "supertest";
import app from "../../../../app";
import { user1 } from "../../../data/users";
import createUser from "../../../../src/services/api/account/createAccount/createUser.service";
import getUser from "../../../../src/services/api/account/login/getUser.service";

describe("Login", () => {
  //Connect
  beforeAll(async () => await connect());

  //Clear database
  afterEach(async () => await clearDatabase());

  //Close database
  afterAll(async () => await closeDatabase());

  test("should return all the users information", (done) => {
    createUser(user1, user1.activationCode)
      .then(() => {
        getUser(user1.username)
          .then((res) => {
            expect(res).toHaveProperty("firstname");
            expect(res).toHaveProperty("surname");
            expect(res).toHaveProperty("username");
            expect(res).toHaveProperty("email");
            expect(res).toHaveProperty("dob");
            expect(res).toHaveProperty("xp");
            expect(res).toHaveProperty("level");
            expect(res).toHaveProperty("isNotifications");
            expect(res).toHaveProperty("notificationId");
            expect(res).toHaveProperty("warnings");
            expect(res).toHaveProperty("role");
            expect(res).toHaveProperty("_id");
            expect(res).toHaveProperty("fans");
            expect(res).toHaveProperty("supporting");

            done();
          })
          .catch((error) => done(error));
      })
      .catch((error) => done(error));
  });
});
