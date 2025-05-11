import {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentInformationById,
  deleteStudentById
} from "../../../database-queries/StudentDBQueries"
import {
  sampleStudent,
  sampleStudentForUpdateTest,
  sampleStudentToBeUsedForByIdQueries,
  sampleStudentUpdatedSurname,
  sampleStudentForUpdatesDefaultfields
} from "../integration-testing-sample-data/sample-data-testing-student-queries"
import {
  deleteStudentByName,
  repopulateDatabaseWithDeletedStudent
} from "../../services/testing-test-services-for-database-queries/student-test-database-queries-services"
import { defaultStudentMatcher } from "../../testing-object-matchers/students-object-property-matchers"

export const studentTests = () =>
  describe("Testing student database queries:", () => {
    describe("Testing database query for creating a student", () => {
      beforeAll(async () => {
        await createStudent(sampleStudent);
      });

      afterAll(async () => {
        await deleteStudentByName(sampleStudent.name);
      });

      it("It should return an array with 6 students", async () => {
        const students = await getAllStudents();

        expect(students).toHaveLength(6);
      });
    });

    describe("Testing get all students in database, database query", () => {
      it("It should return an array with 5 school objects", async () => {
        const students = await getAllStudents();

        expect(students).toHaveLength(5);
      });

      it("It should return an array with objects that match the specified object", async () => {
        const students = await getAllStudents();

        expect(students).toEqual(expect.arrayContaining([expect.objectContaining(defaultStudentMatcher)]));
      });
    });

    describe("Testing get student by _id database query", () => {
      it("It should return an object that matches the specified object properties", async () => {
        const student = await getStudentById(sampleStudentToBeUsedForByIdQueries._id);

        expect(student).toEqual(expect.objectContaining(defaultStudentMatcher));
      });

      it("It should return an object thats has the same name as that of the sample data object passed", async () => {
        const student = await getStudentById(sampleStudentToBeUsedForByIdQueries._id);

        expect(student).toHaveProperty("name", sampleStudentToBeUsedForByIdQueries.name);
      });
    });

    describe("Testing update student by _id database query", () => {
      beforeAll(async () => {
        await updateStudentInformationById({
          studentId: sampleStudentForUpdateTest._id,
          ...sampleStudentForUpdateTest.data
        });
      });

      afterAll(async () => {
        await updateStudentInformationById({
          studentId: sampleStudentForUpdateTest._id,
          ...sampleStudentForUpdatesDefaultfields
        });
      });

      it("It should return an object that has the same name as that of the sample data object passed", async () => {
        const student = await getStudentById(sampleStudentForUpdateTest._id);

        expect(student).toHaveProperty("surname", sampleStudentUpdatedSurname);
      });
    });

    describe("Testing delete student by _id database query", () => {
      beforeAll(async () => {
        await deleteStudentById(sampleStudentToBeUsedForByIdQueries._id);
      });

      afterAll(async () => {
        await repopulateDatabaseWithDeletedStudent(sampleStudentToBeUsedForByIdQueries)
      });

      it("It should return an array with 4 student objects", async () => {
        const students = await getAllStudents();

        expect(students).toHaveLength(4);
      });
    });
  });
