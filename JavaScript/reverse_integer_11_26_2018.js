/**
 * Reverse Integer
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * Input: 123
 * Output: 321
 * 
 * Example 2:
 * Input: -123
 * Output: -321
 * 
 * Example 3:
 * Input: 120
 * Output: 21
 * 
 * NOTE:
 * Assume we are dealing with an environment which could only store integers 
 * within the 32 - bit signed integer range: [−231, 231− 1].For the purpose of 
 * this problem, assume that your function returns 0 when the reversed integer overflows.
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let result = 0;
  let isNegative = x < 0 ? true : false;
  let copy = x;
  copy = isNegative ? x * -1 : x;

  while (copy !== 0) {
    let digit = copy % 10;
    result = result * 10 + digit;
    copy = Math.floor(copy / 10);
  }

  if (isNegative) {
    result = result * -1;
    return result <= (Math.pow(2, 31) * -1) ? 0 : result;
  } else {
    return result >= Math.pow(2, 31) - 1 ? 0 : result;
  }
};

console.log(reverse(123));            // 321
console.log(reverse(-123));           // -321
console.log(reverse(120));            // 21
console.log(reverse(-2147483648));    // 0
console.log(reverse(1534236469));     // 0
console.log(reverse(-1563847412));    // 0
