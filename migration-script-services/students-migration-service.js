import { StudentModel } from "../database-models/Student"
import { Students } from "../sample-data/students-sample-data"

export const createStudentsSampleData = async () => {
  await StudentModel.insertMany(Students);

  console.log(`The students migration script has run successfuly.`);
};

