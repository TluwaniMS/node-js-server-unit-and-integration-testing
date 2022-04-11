const { StudentModel } = require("../database-models/Student");

const createStudent = async ({ name, surname, gender, grade, sports, age }) => {
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

const getAllStudents = async () => {
  const students = await StudentModel.find({});

  return students;
};

const getStudentById = async (studentId) => {
  const student = await StudentModel.findOne({ _id: studentId });

  return student;
};

const updateStudentInformationById = async ({ studentId, name, surname, gender, grade, sports }) => {
  await StudentModel.updateOne(
    { _id: studentId },
    {
      name: name,
      surname: surname,
      gender: gender,
      grade: grade,
      sports: sports
    }
  );

  return `Operation completed successfully.`;
};

const deleteStudentById = async (studentId) => {
  await StudentModel.deleteOne({ _id: studentId });

  return `Operation completed successfully.`;
};

module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudentInformationById,
  deleteStudentById
};
