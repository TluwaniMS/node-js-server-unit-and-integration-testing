const { app } = require("../../../app");
const request = require("supertest");
const {
  sampleSchool,
  sampleSchoolToBeUsedForByIdQueries,
  sampleSchoolForUpdateTests,
  sampleUpdatedSchoolDefaultProperties
} = require("../integration-testing-sample-data/sample-data-testing-school-queries");
const { defaultSchoolObjectMatcher } = require("../../testing-object-matchers/schools-object-property-matchers");
const {
  deleteSchoolByName,
  repopulateDatabaseWithDeletedSchool
} = require("../../services/testing-test-services-for-database-queries/schools-test-database-queries-services");
const {
  updateSchoolInformationById,
  getAllSchools,
  getSchoolById
} = require("../../../database-queries/SchoolDBQueries");

module.exports = () =>
  describe("Testing the schools end-points", () => {
    describe("Testing the create school end-point", () => {
      afterAll(async () => {
        await deleteSchoolByName(sampleSchool.name);
      });

      it("It should return a status 200 response", async () => {
        const response = await request(app).post("/api/schools/create-school").send(sampleSchool);

        expect(response.status).toEqual(200);
      });

      it("It should return an array with 3 schools", async () => {
        const schools = await getAllSchools();

        expect(schools).toHaveLength(3);
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
        const response = await request(app).get(
          `/api/schools/get-school-by-id/${sampleSchoolToBeUsedForByIdQueries._id}`
        );

        expect(response.status).toEqual(200);
      });

      it("It should return an object thats has the same name as that of the sample data object passed", async () => {
        const response = await request(app).get(
          `/api/schools/get-school-by-id/${sampleSchoolToBeUsedForByIdQueries._id}`
        );

        expect(response.body.data).toHaveProperty("name", sampleSchoolToBeUsedForByIdQueries.name);
      });

      it("It should return an object that matches the specified object properties", async () => {
        const response = await request(app).get(
          `/api/schools/get-school-by-id/${sampleSchoolToBeUsedForByIdQueries._id}`
        );

        expect(response.body.data).toEqual(expect.objectContaining(defaultSchoolObjectMatcher));
      });
    });

    describe("Testing the update school information by id end-point", () => {
      afterAll(async () => {
        await updateSchoolInformationById({
          schoolId: sampleSchoolForUpdateTests._id,
          ...sampleUpdatedSchoolDefaultProperties
        });
      });

      it("It should return a status 200 response", async () => {
        const response = await request(app)
          .put(`/api/schools/update-school-information-by-id/${sampleSchoolForUpdateTests._id}`)
          .send(sampleSchoolForUpdateTests.data);

        expect(response.status).toEqual(200);
      });

      it("It should return an object thats has the same name as that of the sample data object passed", async () => {
        const school = await getSchoolById(sampleSchoolForUpdateTests._id);

        expect(school).toHaveProperty("name", sampleSchoolForUpdateTests.data.name);
      });
    });

    describe("Testing the delete school by id end-point", () => {
      afterAll(async () => {
        repopulateDatabaseWithDeletedSchool(sampleSchoolToBeUsedForByIdQueries);
      });

      it("It should return a status 200 response", async () => {
        const response = await request(app).delete(
          `/api/schools/delete-school-by-id/${sampleSchoolToBeUsedForByIdQueries._id}`
        );

        expect(response.status).toEqual(200);
      });

      it("It should return an array with 1 school", async () => {
        const schools = await getAllSchools();

        expect(schools).toHaveLength(1);
      });
    });
  });
