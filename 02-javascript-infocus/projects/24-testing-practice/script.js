// Testing Practice
// 1. Capitalize function
function capitalize(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// 2. Reverse string function
function reverseString(string) {
  return string.split("").reverse().join("");
}

// 3. Calculator object
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

// 4. Caesar cipher function (Placeholder)
function caesarCipher(string, shift) {
  // Normalize shift in case it's a huge number or negative
  const normalizedShift = ((shift % 26) + 26) % 26;

  return string
    .split("")
    .map(char => {
      const code = char.charCodeAt(0);

      // Check for lowercase letters (a-z: ASCII 97-122)
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + normalizedShift) % 26) + 97);
      }

      // Check for uppercase letters (A-Z: ASCII 65-90)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + normalizedShift) % 26) + 65);
      }

      // Leave spaces, punctuation, and numbers unchanged
      return char;
    })
    .join("");
}

// 5. Analyze array function (Placeholder)
function analyzeArray(arr) {
  if (arr.length === 0) return { average: 0, min: 0, max: 0, length: 0 };

  const length = arr.length;
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length
  };
}

// EXPORT all your functions/objects so Jest can access them
module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};