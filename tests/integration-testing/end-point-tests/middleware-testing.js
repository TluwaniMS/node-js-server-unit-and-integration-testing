const { app } = require("../../../app");
const request = require("supertest");
const { sampleSchoolToBeUsedForByIdQueries } = require("../../testing-sample-data/sample-data-testing-school-queries");
const { ErrorMessages } = require("../../../enumerators/error-messages");

module.exports = () =>
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
