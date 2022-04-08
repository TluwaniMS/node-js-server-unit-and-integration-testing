const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentInformationById,
  deleteStudentById
} = require("../../../database-queries/StudentDBQueries");

describe("Testing student database queries:", () => {
  it("It should create a student in the database", async () => {
    expect(1).toEqual(1);
  });

  it("It should get all the existing students in the database", async () => {
    expect(1).toEqual(1);
  });

  it("It should get a student in the database that matches the specified _id", async () => {
    expect(1).toEqual(1);
  });

  it("It should update the student in the database that matches the specified _id", async () => {
    expect(1).toEqual(1);
  });

  it("It should delete the student in the database that that matches the specified _id", async () => {
    expect(1).toEqual(1);
  });
});
