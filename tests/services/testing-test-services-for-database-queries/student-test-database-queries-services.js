const { StudentModel } = require("../../../database-models/Student");

const deleteStudentByName = async (name) => {
  await StudentModel.deleteOne({ name: name });

  console.log(`User deleted by name successfully.`);
};

const getStudentByName = async (name) => {
  const student = await StudentModel.findOne({ name: name });

  return student;
};

const repopulateDatabaseWithDeletedStudent = async (studentObject) => {
  await StudentModel.create(studentObject);
};

module.exports = { deleteStudentByName, getStudentByName, repopulateDatabaseWithDeletedStudent };
