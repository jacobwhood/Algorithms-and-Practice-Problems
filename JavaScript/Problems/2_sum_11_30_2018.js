/**
 * Two Sum
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * https://leetcode.com/problems/two-sum/
 * 
 * Complexity Analysis:
 *   Time: O(n), due to traversing the array only once
 *   Space: O(n), due to creating helper compliments object
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let compliments = {};

  for (let i = 0; i < nums.length; i++) {
    let currNum = nums[i];
    let compliment = target - currNum;

    if (compliments[compliment] !== undefined) {
      return [i, compliments[compliment]];
    }

    compliments[currNum] = i;
  }

  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
