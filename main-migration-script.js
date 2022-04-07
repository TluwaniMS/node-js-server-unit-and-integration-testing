const { createSchoolsSampleData } = require("./migration-script-services/schools-migration-service");
const { createStudentsSampleData } = require("./migration-script-services/students-migration-service");

const populateDataBaseWithSampleData = async () => {
  await createSchoolsSampleData();
  await createStudentsSampleData();

  console.log(`Database hase been successfuly populated.`);
};

module.exports = { populateDataBaseWithSampleData };
