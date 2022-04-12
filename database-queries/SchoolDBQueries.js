const { SchoolModel } = require("../database-models/School");

const createSchool = async ({ name, district, level }) => {
  await SchoolModel.create({
    name: name,
    district: district,
    level: level
  });

  return `Operation completed successfully.`;
};

const getAllSchools = async () => {
  const schools = await SchoolModel.find({}).populate("students");

  return schools;
};

const getSchoolById = async (schoolId) => {
  const school = await SchoolModel.findOne({ _id: schoolId }).populate("students");

  return school;
};

const updateSchoolInformationById = async ({ schoolId, name, level, district }) => {
  await SchoolModel.updateOne({ _id: schoolId }, { name: name, district: district, level: level });

  return `Operation completed successfully.`;
};

const deleteSchoolById = async (schoolId) => {
  await SchoolModel.deleteOne({ _id: schoolId });

  return `Operation completed successfully.`;
};

module.exports = {
  createSchool,
  getAllSchools,
  getSchoolById,
  updateSchoolInformationById,
  deleteSchoolById
};
