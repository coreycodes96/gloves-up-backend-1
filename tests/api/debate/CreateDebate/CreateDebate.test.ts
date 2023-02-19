import { connect, closeDatabase, clearDatabase } from "../../../db-handler";
import request from "supertest";
import app from "../../../../app";
import storeDebate from "../../../../src/services/api/debate/storeDebate/storeDebate.service";
import { debate } from "../../../data/debate";

describe("Create A Debate", () => {
  //Connect
  beforeAll(async () => await connect());

  //Clear database
  afterEach(async () => await clearDatabase());

  //Close database
  afterAll(async () => await closeDatabase());

  test("should create a debate for the user", (done) => {
    storeDebate(debate)
      .then((res) => {
        console.log(res);
        expect(res).toHaveProperty("sender");
        expect(res).toHaveProperty("receiver");
        expect(res).toHaveProperty("title");
        expect(res).toHaveProperty("description");
        expect(res).toHaveProperty("status");
        expect(res).toHaveProperty("viewers");
        expect(res).toHaveProperty("_id");
        expect(res).toHaveProperty("createdAt");
        expect(res).toHaveProperty("updatedAt");
        done();
      })
      .catch((error) => done(error));
  });
});
