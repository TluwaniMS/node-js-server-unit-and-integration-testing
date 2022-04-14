const { getArraySize } = require("../../../services/shared-services");

describe("Testing shared services business logic", () => {
  it("It should return the specified number", () => {
    const arrayLength = getArraySize([1, 2, 3]);

    expect(arrayLength).toEqual(3);
  });
});
