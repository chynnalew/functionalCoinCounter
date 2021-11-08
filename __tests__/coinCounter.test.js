import { counter, coinClosure, quarters, dimes, nickles, pennies } from "../src/scripts";

describe('counter', () => {
  test('should recognize if NaN', () => {
    expect(counter("hello")).toEqual("not a number");
  });
  test('should recognize .01 and return 1 pennies', () => {
    expect(counter(.01)).toEqual("1 pennies");
  });

  test('should return amount of quarters needed', () => {
    expect(counter(.50)).toEqual("2 quarters ");
  });

  test('should return 1 quarters 1 nickles if the change is 30 cents', () => {
    expect(counter(.30)).toEqual("1 quarters 1 nickles ");
  });

  test('should return amount of dimes needed', () => {
    expect(counter(.20)).toEqual("2 dimes ");
  });

  test('should return amount of nickles needed', () => {
    expect(counter(.05)).toEqual("1 nickles ");
  });

  test('should return 1 dimes 1 nickles and 1 pennies if the change is 16 cents', () => {
    expect(counter(.16)).toEqual("1 dimes 1 nickles 1 pennies");
  });
});

describe('coinClosure', () => {

  test('should return quarters', () => {
    expect(quarters(50)).toEqual("2 with 0 remaining");
  });
  test('should return dimes', () => {
    expect(dimes(50)).toEqual("5 with 0 remaining");
  });
  test('should return 2 quarters', () => {
    expect(nickles(16)).toEqual("3 with 1 remaining");
  });
  test('should return pennies', () => {
    expect(pennies(5)).toEqual("5 with 0 remaining");
  });
})