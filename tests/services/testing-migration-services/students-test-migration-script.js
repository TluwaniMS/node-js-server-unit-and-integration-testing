const { StudentModel } = require("../../../database-models/Student");

const createTestStudentsSampleData = async () => {
  await StudentModel.insertMany();

  console.log(`The test schools migration script has run successfuly.`);
};

module.exports = { createTestStudentsSampleData };
