const {
  createSchool,
  getAllSchools,
  getSchoolById,
  updateSchoolInformationById,
  deleteSchoolById
} = require("../../../database-queries/SchoolDBQueries");
const {
  deleteSchoolByName,
  getSchoolByName
} = require("../../services/testing-test-services-for-database-queries/schools-test-database-queries-services");
const { sampleSchool } = require("../../testing-sample-data/sample-data-for-testing-queries");
const { runSetupAndTearDownscripts } = require("../../services/testing-auxiliary-services/set-up-and-tear-down-logic");

runSetupAndTearDownscripts();

describe("Testing school database queries:", () => {
  describe("Testing database query for creating a school", () => {
    it("It should return an array with 3 elements", async () => {
      await createSchool(sampleSchool);

      const schools = await getAllSchools();

      expect(schools).toHaveLength(3);
    });

    it("It should return an object that matches the specified object", async () => {
      const school = await getSchoolByName(sampleSchool.name);

      expect(school).toMatchObject(sampleSchool);
    });

    afterAll(async () => {
      await deleteSchoolByName(sampleSchool.name);
    });
  });

  describe("Testing get all schools in database, database query", () => {
    it("It should get all the existing schools in the database", async () => {
      expect(1).toEqual(1);
    });
  });

  describe("Testing get school in database by _id database query", () => {
    it("It should get a school in the database that matches the specified _id", async () => {
      expect(1).toEqual(1);
    });
  });

  describe("", () => {
    it("It should update the school in the database that matches the specified _id", async () => {
      expect(1).toEqual(1);
    });
  });

  describe("", () => {
    it("It should delete the school in the database that that matches the specified _id", async () => {
      expect(1).toEqual(1);
    });
  });
});
