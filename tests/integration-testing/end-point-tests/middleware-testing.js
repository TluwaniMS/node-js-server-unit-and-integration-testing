import { app } from "../../../app"
import { request } from "supertest"
import { sampleSchoolToBeUsedForByIdQueries } from "../integration-testing-sample-data/sample-data-testing-school-queries"
import { ErrorMessages } from "../../../enumerators/error-messages"

export const middleWareTests = () =>
  describe("Testing end-point middleware error handling", () => {
    describe("Testing internal server errors", () => {
      it("It should return a status code 500", async () => {
        const response = await request(app).get(
          `/api/schools/get-school-by-id/${sampleSchoolToBeUsedForByIdQueries._id}-1`
        );

        expect(response.status).toEqual(500);
      });

      it("It should return a message that matches the passed one", async () => {
        const response = await request(app).get(
          `/api/schools/get-school-by-id/${sampleSchoolToBeUsedForByIdQueries._id}-1`
        );

        expect(response.body.message).toEqual(ErrorMessages.internalServerErrorMessage);
      });
    });

    describe("Testing bad request server errors", () => {
      it("It should return a status code 400", async () => {
        const response = await request(app).get("/api/schools/get-all-school");

        expect(response.status).toEqual(404);
      });

      it("It should return a message that matches the passed one", async () => {
        const response = await request(app).get("/api/schools/get-all-school");

        expect(response.body.message).toEqual(ErrorMessages.badRequestErrorMessage);
      });
    });
  });
