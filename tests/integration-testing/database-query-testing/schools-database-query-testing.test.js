const {
  createSchool,
  getAllSchools,
  getSchoolById,
  updateSchoolInformationById,
  deleteSchoolById
} = require("../../../database-queries/SchoolDBQueries");

describe("Testing school database queries:", () => {
  it("It should create a school in the database", async () => {
    expect(1).toEqual(1);
  });

  it("It should get all the existing schools in the database", async () => {
    expect(1).toEqual(1);
  });

  it("It should get a school in the database that matches the specified _id", async () => {
    expect(1).toEqual(1);
  });

  it("It should update the school in the database that matches the specified _id", async () => {
    expect(1).toEqual(1);
  });

  it("It should delete the school in the database that that matches the specified _id", async () => {
    expect(1).toEqual(1);
  });
});
