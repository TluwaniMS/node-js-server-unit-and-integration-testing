import { SchoolModel } from "../database-models/School"

export const createSchool = async ({ name, district, level }) => {
  await SchoolModel.create({
    name: name,
    district: district,
    level: level
  });

  return `Operation completed successfully.`;
};

export const getAllSchools = async () => {
  const schools = await SchoolModel.find({}).populate("students");

  return schools;
};

export const getSchoolById = async (schoolId) => {
  const school = await SchoolModel.findOne({ _id: schoolId }).populate("students");

  return school;
};

export const updateSchoolInformationById = async ({ schoolId, name, level, district }) => {
  await SchoolModel.updateOne({ _id: schoolId }, { name: name, district: district, level: level });

  return `Operation completed successfully.`;
};

export const deleteSchoolById = async (schoolId) => {
  await SchoolModel.deleteOne({ _id: schoolId });

  return `Operation completed successfully.`;
};

