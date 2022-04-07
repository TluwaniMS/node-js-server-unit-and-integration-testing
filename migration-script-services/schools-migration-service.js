const { SchoolModel } = require("../database-models/School");
const { Schools } = require("../sample-data/schools-sample-data");

const createSchoolsSampleData = async () => {
  await SchoolModel.insertMany(Schools);

  console.log(`The schools migration script has run successfuly.`);
};

module.exports = { createSchoolsSampleData };
