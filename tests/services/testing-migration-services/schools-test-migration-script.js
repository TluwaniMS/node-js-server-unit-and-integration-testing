const { SchoolModel } = require("../../../database-models/School");
const { Schools } = require("../../testing-sample-data/schools-sample-test-data");

const createTestSchoolsSampleData = async () => {
  await SchoolModel.insertMany(Schools);

  console.log(`The test students migration script has run successfuly.`);
};

module.exports = { createTestSchoolsSampleData };
