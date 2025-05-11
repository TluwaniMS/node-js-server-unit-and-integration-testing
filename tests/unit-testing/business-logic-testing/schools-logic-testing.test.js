import {
  addTotalStudentsFieldToSchoolObject,
  returnRequiredSchoolFields
} from "../../../services/school-services"
import {
  sampleSchoolTobeUsedFoBusinessLogicUnitTests
} from "../unit-testing-sample-data/sample-school-data-for-testing-business-logic"
import {
  detailedSchoolInformationObjectMatcher
} from "../../testing-object-matchers/schools-object-property-matchers"

describe("Testing school services business logic", () => {
  it("It should return an object that matches the specified object", () => {
    const requiredSchoolFields = returnRequiredSchoolFields(sampleSchoolTobeUsedFoBusinessLogicUnitTests);

    expect(requiredSchoolFields).toEqual(expect.objectContaining(detailedSchoolInformationObjectMatcher));
  });

  it("It should return an object thats has the totalStudents specified", () => {
    const schoolWithAddedField = addTotalStudentsFieldToSchoolObject(sampleSchoolTobeUsedFoBusinessLogicUnitTests, 3);

    expect(schoolWithAddedField).toHaveProperty("totalStudents", 3);
  });
});
