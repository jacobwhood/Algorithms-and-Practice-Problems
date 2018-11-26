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

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(-2147483648));
console.log(reverse(1534236469));
console.log(reverse(-1563847412));
