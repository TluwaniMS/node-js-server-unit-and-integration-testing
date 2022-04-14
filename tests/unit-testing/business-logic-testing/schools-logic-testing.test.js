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
});
