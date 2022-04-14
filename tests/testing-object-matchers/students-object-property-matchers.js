const defaultStudentMatcher = {
  name: expect.any(String),
  surname: expect.any(String),
  gender: expect.any(String),
  grade: expect.any(Number),
  age: expect.any(Number),
  sports: expect.any(Array)
};

const detailedStudentInformationObjectMatcher = {
  _id: expect.any(String),
  surname: expect.any(String),
  gender: expect.any(String),
  grade: expect.any(Number),
  age: expect.any(Number)
};

module.exports = { defaultStudentMatcher, detailedStudentInformationObjectMatcher };
