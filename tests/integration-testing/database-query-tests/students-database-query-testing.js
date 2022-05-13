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
} = require("../integration-testing-sample-data/sample-data-testing-student-queries");
const {
  deleteStudentByName
} = require("../../services/testing-test-services-for-database-queries/student-test-database-queries-services");
const { defaultStudentMatcher } = require("../../testing-object-matchers/students-object-property-matchers");

module.exports = () =>
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
      it("It should return an object that has the same name as that of the sample data object passed", async () => {
        await updateStudentInformationById({
          studentId: sampleStudentForUpdateTest._id,
          ...sampleStudentForUpdateTest.data
        });

        const student = await getStudentById(sampleStudentForUpdateTest._id);

        expect(student).toHaveProperty("surname", sampleStudentUpdatedSurname);
      });
    });

    describe("Testing delete student by _id database query", () => {
      it("It should return an array with 4 student objects", async () => {
        await deleteStudentById(sampleStudentToBeUsedForByIdQueries._id);

        const students = await getAllStudents();

        expect(students).toHaveLength(4);
      });
    });
  });
