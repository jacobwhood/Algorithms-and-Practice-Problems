/**
 * Longest Common Prefix
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 
 * If there is no common prefix,
 * return an empty string "".
 * 
 * Example 1:
 * Input: ["flower", "flow", "flight"]
 * Output: "fl"
 * 
 * Example 2:
 * Input: ["dog", "racecar", "car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * https: //leetcode.com/problems/longest-common-prefix/description/
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  let currentIndex = 0;
  let prefix = '';

  while (true) {
    let currentChar = strs[0][currentIndex];
    if (currentChar === undefined) return prefix;
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][currentIndex] !== currentChar) {
        return prefix;
      }
    }
    prefix += currentChar;
    currentIndex++;
  }
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));     // "fl"
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));        // ""
