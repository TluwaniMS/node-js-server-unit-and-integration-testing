import { StudentModel } from "../database-models/Student.js"

export const createStudent = async ({ name, surname, gender, grade, sports, age }) => {
  await StudentModel.create({
    name: name,
    surname: surname,
    gender: gender,
    grade: grade,
    sports: sports,
    age: age
  });

  return `Operation completed successfully.`;
};

export const getAllStudents = async () => {
  const students = await StudentModel.find({});

  return students;
};

export const getStudentById = async (studentId) => {
  const student = await StudentModel.findOne({ _id: studentId });

  return student;
};

export const updateStudentInformationById = async ({ studentId, name, surname, gender, grade, sports, age }) => {
  await StudentModel.updateOne(
    { _id: studentId },
    {
      name: name,
      surname: surname,
      gender: gender,
      grade: grade,
      sports: sports,
      age: age
    }
  );

  return `Operation completed successfully.`;
};

export const deleteStudentById = async (studentId) => {
  await StudentModel.deleteOne({ _id: studentId });

  return `Operation completed successfully.`;
};
