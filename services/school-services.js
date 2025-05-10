export const returnRequiredSchoolFields = ({ _id, name, district, level }) => {
  return { _id, name, district, level };
};

export const addTotalStudentsFieldToSchoolObject = (schoolObject, totalStudents) => {
  schoolObject.totalStudents = totalStudents;

  return schoolObject;
};
