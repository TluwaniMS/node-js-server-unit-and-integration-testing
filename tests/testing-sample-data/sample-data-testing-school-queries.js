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

const sampleSchoolUpdatedName = "Moria High School";

module.exports = { sampleSchool, sampleSchoolForUpdateTests, sampleSchoolUpdatedName };
