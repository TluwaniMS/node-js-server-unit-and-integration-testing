const defaultStudentMatcher = {
  name: expect.any(String),
  surname: expect.any(String),
  gender: expect.any(String),
  grade: expect.any(Number),
  age: expect.any(Number),
  sports: expect.any(Array)
};

module.exports = { defaultStudentMatcher };
