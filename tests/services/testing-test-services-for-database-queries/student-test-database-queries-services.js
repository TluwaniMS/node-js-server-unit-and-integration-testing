const { StudentModel } = require("../../../database-models/Student");

const DeleteStudentByName = async (name) => {
  await StudentModel.deleteOne({ name: name });

  console.log(`User deleted by name successfully.`);
};

const getStudentByName = async (name) => {
  const student = await StudentModel.findOne({ name: name });

  return student;
};

module.exports = { DeleteStudentByName, getStudentByName };
