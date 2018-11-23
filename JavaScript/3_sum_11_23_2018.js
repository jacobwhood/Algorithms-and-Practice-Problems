/**
 * 3 sum
 * Given an array nums of n integers, are there elements a, b, c in nums such 
 * that a + b + c = 0 ? Find all unique triplets in the array which gives the sum of zero.
 * 
 * Note:
 * The solution set must not contain duplicate triplets.
 * 
 * https: //leetcode.com/problems/3sum/description/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a,b) => a - b);
  let combos = [];

  for (let indexA = 0; indexA < nums.length - 2; indexA++) {
    const a = nums[indexA];
    if (a > 0) return combos;
    if (a === nums[indexA - 1]) continue;
    let indexB = indexA + 1;
    let indexC = nums.length - 1;

    while (indexB < indexC) {
      const b = nums[indexB];
      const c = nums[indexC];
      const sum = a + b + c;

      if (sum === 0) combos.push([a, b, c]);

      if (sum >= 0) {
        while (nums[indexC - 1] === c) indexC--;
        indexC--;
      }
      if (sum <= 0) {
        while (nums[indexB + 1] === b) indexB++;
        indexB++;
      }
    }

  }
  
  return combos;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));  // [[-1, 0, 1], [-1, -1, 2]]
console.log(threeSum([-3, 0, 0, 2, 1, -4]));  // [[-3, 2, 1]]
