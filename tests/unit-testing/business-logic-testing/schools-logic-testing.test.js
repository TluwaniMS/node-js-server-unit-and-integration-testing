const {
  addTotalStudentsFieldToSchoolObject,
  returnRequiredSchoolFields
} = require("../../../services/school-services");
const {
  sampleSchoolTobeUsedFoBusinessLogicUnitTests
} = require("../../testing-sample-data/sample-school-data-for-testing-business-logic");
const {
  detailedSchoolInformationObjectMatcher
} = require("../../testing-object-matchers/schools-object-property-matchers");

describe("Testing school services business logic", () => {
  it("It should return an object that matches the specified object", () => {
    const requiredSchoolFields = returnRequiredSchoolFields(sampleSchoolTobeUsedFoBusinessLogicUnitTests);

    expect(requiredSchoolFields).toEqual(expect.objectContaining(detailedSchoolInformationObjectMatcher));
  });

  it("It should return an object thats has the same name as that specified", () => {
    const schoolWithAddedField = addTotalStudentsFieldToSchoolObject(sampleSchoolTobeUsedFoBusinessLogicUnitTests, 3);

    expect(schoolWithAddedField).toHaveProperty("totalStudents", 3);
  });
});
