import {
  createSchool,
  getAllSchools,
  getSchoolById,
  updateSchoolInformationById,
  deleteSchoolById
} from "../../../database-queries/SchoolDBQueries"
import {
  deleteSchoolByName,
  repopulateDatabaseWithDeletedSchool
} from "../../services/testing-test-services-for-database-queries/schools-test-database-queries-services"
import {
  sampleSchool,
  sampleSchoolToBeUsedForByIdQueries,
  sampleSchoolForUpdateTests,
  sampleUpdatedSchoolDefaultProperties
} from "../integration-testing-sample-data/sample-data-testing-school-queries"
import { defaultSchoolObjectMatcher } from "../../testing-object-matchers/schools-object-property-matchers"

export const schoolTests = () =>
  describe("Testing school database queries:", () => {
    describe("Testing database query for creating a school", () => {
      beforeAll(async () => {
        await createSchool(sampleSchool);
      });

      afterAll(async () => {
        await deleteSchoolByName(sampleSchool.name);
      });

      it("It should return an array with 3 schools", async () => {
        const schools = await getAllSchools();

        expect(schools).toHaveLength(3);
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
      beforeAll(async () => {
        await updateSchoolInformationById({
          schoolId: sampleSchoolForUpdateTests._id,
          ...sampleSchoolForUpdateTests.data
        });
      });

      afterAll(async () => {
        await updateSchoolInformationById({
          schoolId: sampleSchoolForUpdateTests._id,
          ...sampleUpdatedSchoolDefaultProperties
        });
      });

      it("It should return an object that has the same name as that of the sample data object passed", async () => {
        const school = await getSchoolById(sampleSchoolForUpdateTests._id);

        expect(school).toHaveProperty("name", sampleSchoolForUpdateTests.data.name);
      });
    });

    describe("Testing delete school by _id database query", () => {
      afterAll(async () => {
        await repopulateDatabaseWithDeletedSchool(sampleSchoolToBeUsedForByIdQueries);
      });

      beforeAll(async () => {
        await deleteSchoolById(sampleSchoolToBeUsedForByIdQueries._id);
      });

      it("It should return an array with 1 school object", async () => {
        const schools = await getAllSchools();

        expect(schools).toHaveLength(1);
      });
    });
  });
