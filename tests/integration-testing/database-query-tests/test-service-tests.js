const { createSchool } = require("../../../database-queries/SchoolDBQueries");
const { createStudent } = require("../../../database-queries/StudentDBQueries");
const {
  getSchoolByName,
  deleteSchoolByName
} = require("../../services/testing-test-services-for-database-queries/schools-test-database-queries-services");
const {
  getStudentByName,
  deleteStudentByName
} = require("../../services/testing-test-services-for-database-queries/student-test-database-queries-services");
const { sampleSchool } = require("../integration-testing-sample-data/sample-data-testing-school-queries");
const { sampleStudent } = require("../integration-testing-sample-data/sample-data-testing-student-queries");

module.exports = () =>
  describe("Testing test service data-base queries", () => {
    describe("Testing school testing auxiliary database queries", () => {
      beforeAll(async () => {
        await createSchool(sampleSchool);
      });

      afterAll(async () => {
        await deleteSchoolByName(sampleSchool.name);
      });

      it("It should return an object that matches the specified object", async () => {
        const school = await getSchoolByName(sampleSchool.name);

        expect(school).toHaveProperty("district", sampleSchool.district);
      });

      it("It should return null", async () => {
        await deleteSchoolByName(sampleSchool.name);

        const school = await getSchoolByName(sampleSchool.name);

        expect(school).toEqual(null);
      });
    });

    describe("Testing student testing auxiliary database queries", () => {
      beforeAll(async () => {
        await createStudent(sampleStudent);
      });

      afterAll(async () => {
        await deleteStudentByName(sampleStudent.name);
      });

      it("It should return an object that matches the specified object", async () => {
        const student = await getStudentByName(sampleStudent.name);

        expect(student).toHaveProperty("surname", sampleStudent.surname);
      });

      it("It should return null", async () => {
        await deleteStudentByName(sampleStudent.name);

        const student = await getStudentByName(sampleStudent.name);

        expect(student).toEqual(null);
      });
    });
  });
