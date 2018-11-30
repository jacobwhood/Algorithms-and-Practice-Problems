/**
 * Roman to Integer
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M.
 * 
 * Symbol   Value
 *   I        1
 *   V        5
 *   X       10
 *   L       50
 *   C       100
 *   D       500
 *   M       1000
 * 
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII.
 * 
 * Complexity analysis:
 *   Time: O(n), creating an array of characters from input string, s, then iterating over each character in the array
 *   Space: O(n), where n is number of characters in the input string
 */

const NUMERAL_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

/**
 * @param {String} s
 * @return {Number}
 */
const romanToInt = function (s) {
  return s.split('').reduce((accum, digit, i) => {
    if (accum === null) return accum;
    else if (!NUMERAL_VALUES[digit]) {
      return null;
    } else {
      if (NUMERAL_VALUES[s[i]] < NUMERAL_VALUES[s[i+1]]) {
        accum -= NUMERAL_VALUES[digit];
      } else {
        accum += NUMERAL_VALUES[digit];
      }

      return accum;
    }
  }, 0);
};

console.log(romanToInt('III'));       // 3
console.log(romanToInt('IV'));        // 4
console.log(romanToInt('IX'));        // 9
console.log(romanToInt('LVIII'));     // 58
