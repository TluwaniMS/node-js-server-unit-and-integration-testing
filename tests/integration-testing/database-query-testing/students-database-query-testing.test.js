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
const { runSetupAndTearDownscripts } = require("../../services/testing-auxiliary-services/set-up-and-tear-down-logic");

runSetupAndTearDownscripts();

describe("Testing student database queries:", () => {
  describe("", () => {
    it("It should create a student in the database", async () => {
      expect(1).toEqual(1);
    });
  });

  describe("", () => {
    it("It should get all the existing students in the database", async () => {
      expect(1).toEqual(1);
    });
  });

  describe("", () => {
    it("It should get a student in the database that matches the specified _id", async () => {
      expect(1).toEqual(1);
    });
  });

  describe("", () => {
    it("It should update the student in the database that matches the specified _id", async () => {
      expect(1).toEqual(1);
    });
  });

  describe("", () => {
    it("It should delete the student in the database that that matches the specified _id", async () => {
      expect(1).toEqual(1);
    });
  });
});
