const { SchoolModel } = require("../../../database-models/School");

const deleteSchoolByName = async (name) => {
  await SchoolModel.deleteOne({ name: name });

  console.log(`School deleted by name successfully.`);
};

const getSchoolByName = async (name) => {
  const school = await SchoolModel.findOne({ name: name });

  return school;
};

const repopulateDatabaseWithDeletedSchool = async (schoolObject) => {
  await SchoolModel.create(schoolObject);
};
module.exports = { deleteSchoolByName, getSchoolByName, repopulateDatabaseWithDeletedSchool };
