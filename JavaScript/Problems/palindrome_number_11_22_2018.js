/**
 * Palindrome Number
 * Determine whether an integer is a palindrome. An integer is 
 * a palindrome when it reads the same backward as forward.
 * 
 * 
 * Example 1:
 * Input: 121
 * Output: true
 * 
 * Example 2: 
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads - 121. 
 * From right to left, it becomes 121 - . 
 * Therefore it is not a palindrome.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x === 0) return true;
  let reversedNum = 0,
    input = x;

  while (input > 0) {
    reversedNum = (reversedNum * 10) + (input % 10);
    input = Math.floor(input / 10);
  }

  return x === reversedNum;
};

console.log(isPalindrome(121));      // true
console.log(isPalindrome(-121));     // false
console.log(isPalindrome(10));       // false
