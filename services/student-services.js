const returnRequiredStudentFields = ({ _id, name, surname, gender, grade, age }) => {
  return { _id, name, surname, gender, grade, age };
};

const addTotalSportsPlayedFieldToStudentObject = (studentobject, totalSportsPlayed) => {
  studentobject.totalSportsPlayed = totalSportsPlayed;

  return studentobject;
};

module.exports = {
  returnRequiredStudentFields,
  addTotalSportsPlayedFieldToStudentObject
};
