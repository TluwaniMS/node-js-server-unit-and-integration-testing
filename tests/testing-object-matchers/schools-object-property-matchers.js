const defaultSchoolObjectMatcher = {
  name: expect.any(String),
  district: expect.any(String),
  level: expect.any(String),
  students: expect.any(Array)
};

module.exports = { defaultSchoolObjectMatcher };
