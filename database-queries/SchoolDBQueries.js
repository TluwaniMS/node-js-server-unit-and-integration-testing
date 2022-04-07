const { SchoolModel } = require("../database-models/School");

const createSchool = async (schoolInformation) => {
  await SchoolModel.create({
    name: schoolInformation.name,
    district: schoolInformation.district,
    level: schoolInformation.level
  });

  return `Operation completed successfully.`;
};

const getAllSchools = async () => {
  const schools = await SchoolModel.find({});

  return schools;
};

const getSchoolById = async (schoolId) => {
  const school = await SchoolModel.findOne({ _id: schoolId });

  return school;
};

const updateSchoolInformationById = async (schoolId, schoolInformation) => {
  await SchoolModel.updateOne(
    { _id: schoolId },
    { name: schoolInformation.name, district: schoolInformation.district, level: schoolInformation.level }
  );

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
