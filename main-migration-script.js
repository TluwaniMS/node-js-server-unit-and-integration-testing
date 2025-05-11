import { createSchoolsSampleData } from './migration-script-services/schools-migration-service.js';
import { createStudentsSampleData } from './migration-script-services/students-migration-service.js';

export const populateDataBaseWithSampleData = async () => {
  await createSchoolsSampleData();
  await createStudentsSampleData();

  console.log(`Database hase been successfuly populated.`);
};
