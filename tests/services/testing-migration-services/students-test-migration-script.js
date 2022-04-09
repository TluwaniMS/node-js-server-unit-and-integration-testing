const { StudentModel } = require("../../../database-models/Student");
const { Students } = require("../../testing-sample-data/students-sample-test-data");

const createTestStudentsSampleData = async () => {
  await StudentModel.insertMany(Students);

  console.log(`The test schools migration script has run successfuly.`);
};

module.exports = { createTestStudentsSampleData };
