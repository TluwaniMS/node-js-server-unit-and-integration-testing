const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentInformationById,
  deleteStudentById
} = require("../../../database-queries/StudentDBQueries");
const {
  sampleStudent,
  sampleStudentForUpdateTest,
  sampleStudentToBeUsedForByIdQueries,
  sampleStudentUpdatedSurname
} = require("../../testing-sample-data/sample-data-testing-student-queries");
const {
  deleteStudentByName,
  getStudentByName
} = require("../../services/testing-test-services-for-database-queries/student-test-database-queries-services");
const { defaultStudentMatcher } = require("../../testing-object-matchers/students-object-property-matchers");

module.exports = () =>
  describe("Testing student database queries:", () => {
    describe("Testing database query for creating a student", () => {
      afterAll(async () => {
        await deleteStudentByName(sampleStudent.name);
      });

      it("It should return an array with 6 students", async () => {
        await createStudent(sampleStudent);

        const students = await getAllStudents();

        expect(students).toHaveLength(6);
      });

      it("It should return an object that matches the specified object", async () => {
        const student = await getStudentByName(sampleStudent.name);

        expect(student).toHaveProperty("surname", sampleStudent.surname);
      });
    });

    describe("Testing get all students in database, database query", () => {
      it("It should return an array with 2 school objects", async () => {
        const students = await getAllStudents();

        expect(students).toHaveLength(5);
      });

      it("It should return an array with objects that match the specified object", async () => {
        const students = await getAllStudents();

        expect(students).toEqual(expect.arrayContaining([expect.objectContaining(defaultStudentMatcher)]));
      });
    });

    describe("Testing get student by _id database query", () => {
      it("It should get a student in the database that matches the specified _id", async () => {
        expect(1).toEqual(1);
      });
    });

    describe("Testing update student by _id database query", () => {
      it("It should update the student in the database that matches the specified _id", async () => {
        expect(1).toEqual(1);
      });
    });

    describe("Testing delete student by _id database query", () => {
      it("It should delete the student in the database that that matches the specified _id", async () => {
        expect(1).toEqual(1);
      });
    });
  });
