const sampleStudent = {
  name: "Medi",
  surname: "Kakholo",
  gender: "Male",
  sports: ["Soccer"]
};

const sampleStudentForUpdateTest = {
  _id: "624edb425712f22ee59fd988",
  data: {
    name: "Lufuno",
    surname: "Marimba",
    grade: 6,
    age: 12,
    sports: ["Netball", "Swimming"],
    gender: "Female"
  }
};

const sampleStudentUpdatedSurname = "Marimba";

const sampleStudentToBeUsedForByIdQueries = {
  _id: "624edb425712f22ee59fd989",
  name: "Refilwe",
  surname: "Phago",
  grade: 9,
  age: 15,
  sports: ["Soccer"],
  gender: "Female"
};

module.exports = {
  sampleStudent,
  sampleStudentForUpdateTest,
  sampleStudentUpdatedSurname,
  sampleStudentToBeUsedForByIdQueries
};