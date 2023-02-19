import { connect, closeDatabase, clearDatabase } from "../../../db-handler";
import request from "supertest";
import app from "../../../../app";
import storeDebate from "../../../../src/services/api/debate/storeDebate/storeDebate.service";
import deleteDebate from "../../../../src/services/api/debate/deleteDebate/deleteDebate.service";
import { debate } from "../../../data/debate";

describe("Delete A Debate", () => {
  //Connect
  beforeAll(async () => await connect());

  //Clear database
  afterEach(async () => await clearDatabase());

  //Close database
  afterAll(async () => await closeDatabase());

  test("should delete a debate for the user", (done) => {
    storeDebate(debate)
      .then((res) => {
        deleteDebate(String(res._id)).then((res) => {
          expect(res).toBe("Debate deleted");
          done();
        });
      })
      .catch((error) => done(error));
  });
});
