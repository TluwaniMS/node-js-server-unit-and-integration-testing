import { getAllSchools } from "../../../database-queries/SchoolDBQueries"
import { getAllStudents } from "../../../database-queries/StudentDBQueries"
import {
  getSchoolByName,
  deleteSchoolByName,
  repopulateDatabaseWithDeletedSchool
} from "../../services/testing-test-services-for-database-queries/schools-test-database-queries-services"
import {
  getStudentByName,
  deleteStudentByName,
  repopulateDatabaseWithDeletedStudent
} from "../../services/testing-test-services-for-database-queries/student-test-database-queries-services"
import {
  sampleSchoolToBeUsedForByIdQueries
} from "../integration-testing-sample-data/sample-data-testing-school-queries"
import {
  sampleStudentToBeUsedForByIdQueries
} from "../integration-testing-sample-data/sample-data-testing-student-queries"

export const testServiceTests = () =>
  describe("Testing test service data-base queries", () => {
    describe("Testing school testing auxiliary database queries", () => {
      describe("Testing delete school by name database query", () => {
        beforeAll(async () => {
          await deleteSchoolByName(sampleSchoolToBeUsedForByIdQueries.name);
        });

        afterAll(async () => {
          await repopulateDatabaseWithDeletedSchool(sampleSchoolToBeUsedForByIdQueries);
        });

        it("It should return an array with the specified length", async () => {
          const schools = await getAllSchools();

          expect(schools).toHaveLength(1);
        });
      });

      describe("Testing get school by name database query", () => {
        it("It should return an object with the specified name", async () => {
          const school = await getSchoolByName(sampleSchoolToBeUsedForByIdQueries.name);

          expect(school).toHaveProperty("name", sampleSchoolToBeUsedForByIdQueries.name);
        });
      });
    });

    describe("Testing student testing auxiliary database queries", () => {
      describe("Testing delete student by name database query", () => {
        beforeAll(async () => {
          await deleteStudentByName(sampleStudentToBeUsedForByIdQueries.name);
        });

        afterAll(async () => {
          await repopulateDatabaseWithDeletedStudent(sampleStudentToBeUsedForByIdQueries);
        });

        it("It should return an array with the specified length", async () => {
          const students = await getAllStudents();

          expect(students).toHaveLength(4);
        });
      });

      describe("Testing get student by name database query", () => {
        it("It should return an object with a name that matches the one specified", async () => {
          const student = await getStudentByName(sampleStudentToBeUsedForByIdQueries.name);

          expect(student).toHaveProperty("name", sampleStudentToBeUsedForByIdQueries.name);
        });
      });
    });
  });
