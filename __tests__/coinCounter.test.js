import counter from "../src/scripts";

describe('counter', () => {
  test('should recognize .01 and return 1 pennies', () => {
    expect(counter(.01)).toEqual("1 pennies");
  });

  test('should return amount of quarters needed', () => {
    expect(counter(.50)).toEqual("2 quarters");
  });
});