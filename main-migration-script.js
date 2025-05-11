import { createSchoolsSampleData } from './migration-script-services/schools-migration-service';
import { createStudentsSampleData } from './migration-script-services/students-migration-service';

export const populateDataBaseWithSampleData = async () => {
  await createSchoolsSampleData();
  await createStudentsSampleData();

  console.log(`Database hase been successfuly populated.`);
};
