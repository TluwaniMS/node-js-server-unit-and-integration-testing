import { SchoolModel } from '../../../database-models/School';
import { Schools } from '../../testing-sample-data/schools-sample-test-data';

export const createTestSchoolsSampleData = async () => {
  await SchoolModel.insertMany(Schools);

  console.log(`The test students migration script has run successfuly.`);
};

