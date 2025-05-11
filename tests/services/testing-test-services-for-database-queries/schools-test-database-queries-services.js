import { SchoolModel } from '../../../database-models/School';

export const deleteSchoolByName = async (name) => {
  await SchoolModel.deleteOne({ name: name });

  console.log(`School deleted by name successfully.`);
};

export const getSchoolByName = async (name) => {
  const school = await SchoolModel.findOne({ name: name });

  return school;
};

export const repopulateDatabaseWithDeletedSchool = async (schoolObject) => {
  await SchoolModel.create(schoolObject);
};
