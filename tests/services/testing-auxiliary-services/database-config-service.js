import { connectToDataBase } from "../../../database-configuration"
import { createTestSchoolsSampleData } from "../testing-migration-services/schools-test-migration-script"
import { createTestStudentsSampleData } from "../testing-migration-services/students-test-migration-script"
import dotenv from "dotenv"
dotenv.config();

const dataBaseURL = process.env.MONGO_TEST_URL;

export const createDatabaseConnectionAndPopulateDatabase = async () => {
  await connectToDataBase(dataBaseURL);
  await createTestSchoolsSampleData();
  await createTestStudentsSampleData();
};
