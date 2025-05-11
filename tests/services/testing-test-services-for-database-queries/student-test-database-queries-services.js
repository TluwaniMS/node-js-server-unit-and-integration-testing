import { StudentModel } from '../../../database-models/Student';

export const deleteStudentByName = async (name) => {
  await StudentModel.deleteOne({ name: name });

  console.log(`User deleted by name successfully.`);
};

export const getStudentByName = async (name) => {
  const student = await StudentModel.findOne({ name: name });

  return student;
};

export const repopulateDatabaseWithDeletedStudent = async (studentObject) => {
  await StudentModel.create(studentObject);
};
