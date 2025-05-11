export const defaultSchoolObjectMatcher = {
  name: expect.any(String),
  district: expect.any(String),
  level: expect.any(String),
  students: expect.any(Array),
};

export const detailedSchoolInformationObjectMatcher = {
  _id: expect.any(String),
  name: expect.any(String),
  district: expect.any(String),
  level: expect.any(String),
};
