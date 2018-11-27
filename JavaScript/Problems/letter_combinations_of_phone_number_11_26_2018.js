/**
 * Letter Combinations of a Phone Number
 * 
 * Given a string containing digits from 2-9 inclusive,
 * return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is 
 * given below. Note that 1 does not map to any letters.
 * 
 * Example:
 * Input: '23'
 * Output: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
 * 
 * Note:
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let combinations = [];

  const charsMappedToDigit = { 
    1: [''], 
    2: ['a', 'b', 'c'], 
    3: ['d', 'e', 'f'], 
    4: ['g', 'h', 'i'], 
    5: ['j', 'k', 'l'], 
    6: ['m', 'n', 'o'], 
    7: ['p', 'q', 'r', 's'], 
    8: ['t', 'u', 'v'], 
    9: ['w', 'x', 'y', 'z']
  };

  const makeCombinationsForDigit = (digit, mappedCharsForDigit, existingCombinations) => {
    let combinations = [];
    
    if (existingCombinations.length === 0) {
      for (let char of mappedCharsForDigit) {
        combinations.push(char);
      }
    } else {
      for (let i = 0; i < mappedCharsForDigit.length; i++) {
        for (let j = 0; j < existingCombinations.length; j++) {
          let currentCombo = existingCombinations[j];
          combinations.push(currentCombo + mappedCharsForDigit[i])
        }
      }
    }

    return combinations;
  }

  for (let digit of digits) {
    combinations = makeCombinationsForDigit(digit, charsMappedToDigit[digit], combinations);
  }

  return combinations;
};

console.log(letterCombinations('23'));    // ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
