const { StudentModel } = require("../database-models/Student");

const createStudent = async (studentInformation) => {
  await StudentModel.create({
    name: studentInformation.name,
    surname: studentInformation.surname,
    gender: studentInformation.gender,
    grade: studentInformation.grade,
    dateOfBirth: studentInformation.dateOfBirth,
    sports: studentInformation.sports
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

const updateStudentInformationById = async (studentId, studentInformation) => {
  await StudentModel.updateOne(
    { _id: studentId },
    {
      name: studentInformation.name,
      surname: studentInformation.surname,
      gender: studentInformation.gender,
      grade: studentInformation.grade,
      dateOfBirth: studentInformation.dateOfBirth,
      sports: studentInformation.sports
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
