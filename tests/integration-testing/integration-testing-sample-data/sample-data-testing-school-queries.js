const sampleSchool = {
  name: "Jeppe Boys High School",
  district: "Capricorn District Municipality",
  level: "Secondary"
};

const sampleSchoolForUpdateTests = {
  _id: "624eddc76022740b286b6be2",
  data: {
    name: "Moria High School",
    district: "Mopani District Municipality	",
    level: "Secondary",
    students: ["624edb425712f22ee59fd987", "624edb425712f22ee59fd989", "624edb425712f22ee59fd98b"]
  }
};

const sampleUpdatedSchoolDefaultProperties = {
  name: "Marobathota  High School",
  district: "Mopani District Municipality	",
  level: "Secondary",
  students: ["624edb425712f22ee59fd987", "624edb425712f22ee59fd989", "624edb425712f22ee59fd98b"]
};

const sampleSchoolUpdatedName = "Moria High School";

const sampleSchoolToBeUsedForByIdQueries = {
  _id: "624eddc76022740b286b6be1",
  name: "Kgwadu Primary School",
  district: "Capricorn District Municipality",
  level: "Primary",
  students: ["624edb425712f22ee59fd988", "624edb425712f22ee59fd98a"]
};

module.exports = {
  sampleSchool,
  sampleSchoolForUpdateTests,
  sampleSchoolUpdatedName,
  sampleSchoolToBeUsedForByIdQueries,
  sampleUpdatedSchoolDefaultProperties
};
