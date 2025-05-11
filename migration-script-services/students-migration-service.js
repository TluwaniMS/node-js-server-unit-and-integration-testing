import { StudentModel } from "../database-models/Student.js"
import { Students } from "../sample-data/students-sample-data.js"

export const createStudentsSampleData = async () => {
  await StudentModel.insertMany(Students);

  console.log(`The students migration script has run successfuly.`);
};

