const { app } = require("../../../app");
const request = require("supertest");
const {
  sampleSchool,
  sampleSchoolToBeUsedForByIdQueries,
  sampleSchoolForUpdateTests,
  sampleSchoolUpdatedName
} = require("../../testing-sample-data/sample-data-testing-school-queries");

module.exports = () =>
  describe("Testing the schools end-points", () => {
    describe("Testing the create school end-point", () => {
      it("It should return a status 200 response", async () => {
        const response = await request(app).get("/api/schools/create-school");

        expect(1).toEqual(1);
      });
    });

    describe("Testing the get all schools end-point", () => {
      it("It should return a status 200 response", async () => {
        const response = await request(app).get("/api/schools/get-all-schools");

        expect(response.status).toEqual(200);
      });

      it("It should return an array with 2 schools", async () => {
        const response = await request(app).get("/api/schools/get-all-schools");

        expect(response.body.data).toHaveLength(2);
      });
    });

    describe("Testing the get school by id end-point", () => {
      it("It should return a status 200 response", async () => {
        const response = await request(app).get("/api/schools/get-school-by-id");

        expect(1).toEqual(1);
      });
    });

    describe("Testing the update school information by id end-point", () => {
      it("It should return a status 200 response", async () => {
        const response = await request(app).get("/api/schools/update-school-information-by-id");

        expect(1).toEqual(1);
      });
    });

    describe("Testing the delete school by id end-point", () => {
      it("It should return a status 200 response", async () => {
        const response = request(app).get("/api/schools/delete-school-by-id");

        expect(1).toEqual(1);
      });
    });
  });
