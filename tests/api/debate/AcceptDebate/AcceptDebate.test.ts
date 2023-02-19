import { connect, closeDatabase, clearDatabase } from "../../../db-handler";
import request from "supertest";
import app from "../../../../app";
import storeDebate from "../../../../src/services/api/debate/storeDebate/storeDebate.service";
import updateDebate from "../../../../src/services/api/debate/updateDebate/updateDebate.service";
import { debate } from "../../../data/debate";

describe("Accept A Debate", () => {
  //Connect
  beforeAll(async () => await connect());

  //Clear database
  afterEach(async () => await clearDatabase());

  //Close database
  afterAll(async () => await closeDatabase());

  test("should accept a debate for the user", (done) => {
    storeDebate(debate)
      .then((res) => {
        updateDebate(String(res._id)).then((res) => {
          expect(res).toBe("Debate updated");
          done();
        });
      })
      .catch((error) => done(error));
  });
});
