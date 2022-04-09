const { SchoolModel } = require("../../../database-models/School");

const deleteSchoolByName = async (name) => {
  await SchoolModel.deleteOne({ name: SchoolModel });

  console.log(`School deleted by name successfully.`);
};

const getSchoolByName = async (name) => {
  const school = await SchoolModel.findOne({ name: name });

  return school;
};

module.exports = { deleteSchoolByName, getSchoolByName };
