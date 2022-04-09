const { connectToDataBase } = require("../../../database-configuration");
const { createTestSchoolsSampleData } = require("../testing-migration-services/schools-test-migration-script");
const { createTestStudentsSampleData } = require("../testing-migration-services/students-test-migration-script");
const dotenv = require("dotenv");
dotenv.config();

const dataBaseURL = process.env.MONGO_TEST_URL;

const createDatabaseConnectionAndPopulateDatabase = async () => {
  await connectToDataBase(dataBaseURL);
  await createTestSchoolsSampleData();
  await createTestStudentsSampleData();
};

module.exports = { createDatabaseConnectionAndPopulateDatabase };
