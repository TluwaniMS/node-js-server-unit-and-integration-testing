const { StudentModel } = require("../database-models/Student");
const { Students } = require("../sample-data/students-sample-data");

const createStudentsSampleData = async () => {
  await StudentModel.insertMany(Students);

  console.log(`The students migration script has run successfuly.`);
};

module.exports = { createStudentsSampleData };
