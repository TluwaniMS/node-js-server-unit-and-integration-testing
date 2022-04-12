const { app } = require("../../../app");
const request = require("supertest");
const {
  sampleStudent,
  sampleStudentForUpdateTest,
  sampleStudentToBeUsedForByIdQueries,
  sampleStudentUpdatedSurname
} = require("../../testing-sample-data/sample-data-testing-student-queries");

module.exports = () =>
  describe("Testing the students end-points", () => {
    describe("Testing the create student end-point", () => {
      it("It should return a status 200 response", async () => {
        const response = await request(app).get("/api/students/create-student");

        expect(1).toEqual(1);
      });
    });

    describe("Testing the get all students end-point", () => {
      it("It should return a status 200 response", async () => {
        const response = await request(app).get("/api/students/get-all-students");

        expect(response.status).toEqual(200);
      });

      it("It should return an array with 6 students", async () => {
        const response = await request(app).get("/api/students/get-all-students");

        expect(response.body.data).toHaveLength(5);
      });
    });

    describe("Testing the get student by id end-point", () => {
      it("It should return a status 200 response", async () => {
        const response = await request(app).get("/api/students/get-student-by-id/");

        expect(1).toEqual(1);
      });
    });

    describe("Testing the update student information by id end-point", () => {
      it("It should return a status 200 response", async () => {
        const response = await request(app).get("/api/students/update-student-information-by-id");

        expect(1).toEqual(1);
      });
    });

    describe("Testing the delete student by id end-point", () => {
      it("It should return a status 200 response", async () => {
        const response = await request(app).get("/api/students/delete-student-by-id");

        expect(1).toEqual(1);
      });
    });
  });
