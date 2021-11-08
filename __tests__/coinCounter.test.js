import counter from "../src/scripts";

describe('counter', () => {
  test('should recognize one and return 1 pennies', () => {
    expect(counter(1)).toEqual("1 pennies");
  });
});