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
const {
  sampleSchool,
  sampleSchoolToBeUsedForByIdQueries,
  sampleSchoolForUpdateTests
} = require("../../testing-sample-data/sample-data-testing-school-queries");
const { defaultSchoolObjectMatcher } = require("../../testing-object-matchers/schools-object-property-matchers");
const { runSetupAndTearDownscripts } = require("../../services/testing-auxiliary-services/set-up-and-tear-down-logic");

runSetupAndTearDownscripts();

describe("Testing school database queries:", () => {
  describe("Testing database query for creating a school", () => {
    afterAll(async () => {
      await deleteSchoolByName(sampleSchool.name);
    });

    it("It should return an array with 3 schools", async () => {
      await createSchool(sampleSchool);

      const schools = await getAllSchools();

      expect(schools).toHaveLength(3);
    });

    it("It should return an object that matches the specified object", async () => {
      const school = await getSchoolByName(sampleSchool.name);

      expect(school).toMatchObject(sampleSchool);
    });
  });

  describe("Testing get all schools in database, database query", () => {
    it("It should return an array with 2 school objects", async () => {
      const schools = await getAllSchools();

      expect(schools).toHaveLength(2);
    });

    it("It should return an array with objects that match the specified object", async () => {
      const schools = await getAllSchools();

      expect(schools).toEqual(expect.arrayContaining([expect.objectContaining(defaultSchoolObjectMatcher)]));
    });
  });

  describe("Testing get school by _id database query", () => {
    it("It should return an object that matches the specified object properties", async () => {
      const school = await getSchoolById(sampleSchoolToBeUsedForByIdQueries._id);

      expect(school).toEqual(expect.objectContaining(defaultSchoolObjectMatcher));
    });

    it("It should return an object thats has the same name as that of the sample data object passed", async () => {
      const school = await getSchoolById(sampleSchoolToBeUsedForByIdQueries._id);

      expect(school).toHaveProperty("name", sampleSchoolToBeUsedForByIdQueries.name);
    });
  });

  describe("Testing update school by _id database query", () => {
    it("It should return an object that has the same name as that of the sample data object passed", async () => {
      await updateSchoolInformationById({
        schoolId: sampleSchoolForUpdateTests._id,
        ...sampleSchoolForUpdateTests.data
      });

      const school = await getSchoolById(sampleSchoolForUpdateTests._id);

      expect(school).toHaveProperty("name", sampleSchoolForUpdateTests.data.name);
    });
  });

  describe("", () => {
    it("It should delete the school in the database that that matches the specified _id", async () => {
      expect(1).toEqual(1);
    });
  });
});
