import {
  returnRequiredStudentFields,
  addTotalSportsPlayedFieldToStudentObject,
} from '../../../services/student-services';
import { detailedStudentInformationObjectMatcher } from '../../testing-object-matchers/students-object-property-matchers';
import { sampleStudentTobeUsedFoBusinessLogicUnitTests } from '../unit-testing-sample-data/sample-student-data-for-testing-business-logic';

describe('Testing student services business logic', () => {
  it('It should return an object that matches the specified object', () => {
    const requiredStudentFields = returnRequiredStudentFields(
      sampleStudentTobeUsedFoBusinessLogicUnitTests
    );

    expect(requiredStudentFields).toEqual(
      expect.objectContaining(detailedStudentInformationObjectMatcher)
    );
  });

  it('It should return an object thats has the totalSportsPlayed specified', () => {
    const studentWithAddedField = addTotalSportsPlayedFieldToStudentObject(
      sampleStudentTobeUsedFoBusinessLogicUnitTests,
      4
    );

    expect(studentWithAddedField).toHaveProperty('totalSportsPlayed', 4);
  });
});
