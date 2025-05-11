import { connectToDataBase } from '../../../database-configuration';
import { createTestSchoolsSampleData } from '../testing-migration-services/schools-test-migration-script';
import { createTestStudentsSampleData } from '../testing-migration-services/students-test-migration-script';

export const createDatabaseConnectionAndPopulateDatabase = async (dataBaseURL) => {
  await connectToDataBase(dataBaseURL);
  await createTestSchoolsSampleData();
  await createTestStudentsSampleData();
};
