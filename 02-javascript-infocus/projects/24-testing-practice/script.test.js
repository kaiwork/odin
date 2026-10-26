const { capitalize, reverseString, calculator } = require("./script");

// Test 1: Capitalize
test("capitalizes the first character of a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

// Test 2: Reverse String
test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

// Test 3: Calculator
test("calculator adds two numbers", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("calculator divides two numbers", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("expect caesar cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("expect array values", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  // object should equal:
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
