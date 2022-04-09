const { SchoolModel } = require("../../../database-models/School");

const createTestSchoolsSampleData = async () => {
  await SchoolModel.insertMany();

  console.log(`The test students migration script has run successfuly.`);
};

module.exports = { createTestSchoolsSampleData };
