const { app } = require("../../../app");
const request = require("supertest");

module.exports = () =>
  describe("Testing the students end-points", () => {
    describe("Testing the create student end-point", () => {
      it("", async () => {
        const response = request(app).get("/api/students/create-student");

        expect(1).toEqual(1);
      });
    });

    describe("Testing the get all students end-point", () => {
      it("", async () => {
        const response = request(app).get("/api/students/get-all-students");

        expect(1).toEqual(1);
      });
    });

    describe("Testing the get student by id end-point", () => {
      it("", async () => {
        const response = request(app).get("/api/students/get-student-by-id/");

        expect(1).toEqual(1);
      });
    });

    describe("Testing the update student information by id end-point", () => {
      it("", async () => {
        const response = request(app).get("/api/students/update-student-information-by-id");

        expect(1).toEqual(1);
      });
    });

    describe("Testing the delete student by id end-point", () => {
      it("", async () => {
        const response = request(app).get("/api/students/delete-student-by-id");
        
        expect(1).toEqual(1);
      });
    });
  });
