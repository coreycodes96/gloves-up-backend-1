import { connect, closeDatabase, clearDatabase } from "../../../db-handler";
import request from "supertest";
import app from "../../../../app";
import createUser from "../../../../src/services/api/account/createAccount/createUser.service";
import { user1 } from "../../../data/users";

describe("Create An Account", () => {
  //Connect
  beforeAll(async () => await connect());

  //Clear database
  afterEach(async () => await clearDatabase());

  //Close database
  afterAll(async () => await closeDatabase());

  test("should create an account for the user", (done) => {
    createUser(user1, user1.activationCode)
      .then((res) => {
        expect(res).toHaveProperty("firstname");
        expect(res).toHaveProperty("surname");
        expect(res).toHaveProperty("username");
        expect(res).toHaveProperty("email");
        expect(res).toHaveProperty("dob");
        expect(res).toHaveProperty("password");
        expect(res).toHaveProperty("xp");
        expect(res).toHaveProperty("level");
        expect(res).toHaveProperty("isNotifications");
        expect(res).toHaveProperty("notificationId");
        expect(res).toHaveProperty("warnings");
        expect(res).toHaveProperty("role");
        expect(res).toHaveProperty("forgotPasswordCode");
        expect(res).toHaveProperty("_id");
        expect(res).toHaveProperty("fans");
        expect(res).toHaveProperty("supporting");
        expect(res).toHaveProperty("createdAt");
        expect(res).toHaveProperty("updatedAt");
        done();
      })
      .catch((error) => done(error));
  });
});
