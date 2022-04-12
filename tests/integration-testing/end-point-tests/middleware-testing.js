const { app } = require("../../../app");
const request = require("supertest");
const { sampleSchoolToBeUsedForByIdQueries } = require("../../testing-sample-data/sample-data-testing-school-queries");

module.exports = () =>
  describe("Testing end-point middleware error handling", () => {
    describe("Testing internal server errors", () => {
      it("It should return a status code 500", async () => {
        const response = await request(app).get(
          `/api/schools/get-school-by-id/${sampleSchoolToBeUsedForByIdQueries._id}-1`
        );

        expect(response.status).toEqual(500);
      });
    });

    describe("Testing bad request server errors", () => {
      it("It should return a status code 400", async () => {
        const response = await request(app).get("/api/schools/get-all-school");

        expect(response.status).toEqual(404);
      });
    });
  });
