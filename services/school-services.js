const calculateTotalStudentsInschool = (studentsArray) => {
  return studentsArray.length;
};

const returnRequiredSchoolFields = ({ _id, name, district, level }) => {
  return { _id, name, district, level };
};

const addTotalStudentsFieldToSchoolObject = (schoolObject, totalStudents) => {
  schoolObject.totalStudents = totalStudents;

  return schoolObject;
};

module.exports = { calculateTotalStudentsInschool, returnRequiredSchoolFields, addTotalStudentsFieldToSchoolObject };
