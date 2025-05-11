import { StudentModel } from '../../../database-models/Student';
import { Students } from '../../testing-sample-data/students-sample-test-data';

export const createTestStudentsSampleData = async () => {
  await StudentModel.insertMany(Students);

  console.log(`The test schools migration script has run successfuly.`);
};
