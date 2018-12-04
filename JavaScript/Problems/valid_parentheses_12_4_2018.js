/**
 * Valid Parentheses
 * 
 * Given a string containing just the characters '(', ')', '{', '}', '[', ']', determine
 * if the input string is valid
 * 
 * An input string is valid if:
 *   1. Open brackets must be closed by the same type of brackets.
 *   2. Open brackets must be clsoed in the correct order.
 * 
 * Example 1:
 * Input: '()'
 * Output: true
 * 
 * Example 2:
 * Input: '()[]{}'
 * Output: true
 * 
 * Example 3:
 * Input: '(]'
 * Output: false
 * 
 * Example 4:
 * Input: '([)]'
 * Output false
 * 
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
  let stack = [];
  let brace = null;
  let matchingOpeningBrace = { ')':'(', '}':'{', ']':'[' };
  let openingBraces = { '(':'(', '{':'{', '[':'[' };
  let closingBraces = { ')':')', '}':'}', ']':']' };

  for (c of str) {
    if (openingBraces[c]) {
      stack.push(c);
    } else if (closingBraces[c]) {
      brace = stack.pop();

      if ( brace !== matchingOpeningBrace[c]) {
        return false;
      }
    }
  }

  if (stack.pop() !== undefined) {
    return false;
  }

  return true;
}

console.log(isValid('()'));     // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]'));     // false
console.log(isValid('([)]'));   // false
