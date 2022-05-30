const { app } = require("../../../app");
const request = require("supertest");
const {
  sampleStudent,
  sampleStudentForUpdateTest,
  sampleStudentToBeUsedForByIdQueries,
  sampleStudentUpdatedSurname,
  sampleStudentForUpdatesDefaultfields
} = require("../integration-testing-sample-data/sample-data-testing-student-queries");
const { defaultStudentMatcher } = require("../../testing-object-matchers/students-object-property-matchers");
const {
  deleteStudentByName,
  repopulateDatabaseWithDeletedStudent
} = require("../../services/testing-test-services-for-database-queries/student-test-database-queries-services");
const {
  updateStudentInformationById,
  getAllStudents,
  getStudentById
} = require("../../../database-queries/StudentDBQueries");

module.exports = () =>
  describe("Testing the students end-points", () => {
    describe("Testing the create student end-point", () => {
      afterAll(async () => {
        await deleteStudentByName(sampleStudent.name);
      });

      it("It should return a status 200 response", async () => {
        const response = await request(app).post("/api/students/create-student").send(sampleStudent);

        expect(response.status).toEqual(200);
      });

      it("It should return an array with 6 students", async () => {
        const students = await getAllStudents();

        expect(students).toHaveLength(6);
      });
    });

    describe("Testing the get all students end-point", () => {
      it("It should return a status 200 response", async () => {
        const response = await request(app).get("/api/students/get-all-students");

        expect(response.status).toEqual(200);
      });

      it("It should return an array with 5 students", async () => {
        const response = await request(app).get("/api/students/get-all-students");

        expect(response.body.data).toHaveLength(5);
      });
    });

    describe("Testing the get student by id end-point", () => {
      it("It should return a status 200 response", async () => {
        const response = await request(app).get(
          `/api/students/get-student-by-id/${sampleStudentToBeUsedForByIdQueries._id}`
        );

        expect(response.status).toEqual(200);
      });

      it("It should return an object that matches the specified object properties", async () => {
        const response = await request(app).get(
          `/api/students/get-student-by-id/${sampleStudentToBeUsedForByIdQueries._id}`
        );

        expect(response.body.data).toEqual(expect.objectContaining(defaultStudentMatcher));
      });

      it("It should return an object thats has the same name as that of the sample data object passed", async () => {
        const response = await request(app).get(
          `/api/students/get-student-by-id/${sampleStudentToBeUsedForByIdQueries._id}`
        );

        expect(response.body.data).toHaveProperty("name", sampleStudentToBeUsedForByIdQueries.name);
      });
    });

    describe("Testing the update student information by id end-point", () => {
      afterAll(async () => {
        await updateStudentInformationById({
          studentId: sampleStudentForUpdateTest._id,
          ...sampleStudentForUpdatesDefaultfields
        });
      });

      it("It should return a status 200 response", async () => {
        const response = await request(app)
          .put(`/api/students/update-student-information-by-id/${sampleStudentForUpdateTest._id}`)
          .send(sampleStudentForUpdateTest.data);

        expect(response.status).toEqual(200);
      });

      it("It should return an object thats has the same surname as that of the sample data object passed", async () => {
        const student = await getStudentById(sampleStudentForUpdateTest._id);

        expect(student).toHaveProperty("surname", sampleStudentUpdatedSurname);
      });
    });

    describe("Testing the delete student by id end-point", () => {
      afterAll(async () => {
        await repopulateDatabaseWithDeletedStudent(sampleStudentToBeUsedForByIdQueries);
      });

      it("It should return a status 200 response", async () => {
        const response = await request(app).delete(
          `/api/students/delete-student-by-id/${sampleStudentToBeUsedForByIdQueries._id}`
        );

        expect(response.status).toEqual(200);
      });

      it("It should return an array with 6 students", async () => {
        const students = await getAllStudents();

        expect(students).toHaveLength(4);
      });
    });
  });
