/**
 * 3Sum Closest
 * 
 * Given an array nums of n integers and an integer target, find three integers in 
 * nums such that the sum is closest to target.Return the sum of the three integers.
 * You may assume that each input would have exactly one solution. 
 * 
 * Example:
 * Input: nums = [-1, 2, 1, -4], target = 1
 * Output: 2
 * Explanation: (-1 + 2 + 1 = 2)
 * 
 * 
 */


// Brute force: find all combos of length 3, returning one with smallest difference from zero
// Time complexity: O(n^3)
// Space complexity: O(1)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let smallDiff = Number.MAX_SAFE_INTEGER;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      for (let k = j+1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        if (Math.abs(sum - target) < smallDiff) {
          result = sum;
          smallDiff = Math.abs(sum - target);
        }
      }
    }
  }
  return result;
};

// console.log(threeSumClosest([-1, 2, 1, -4], 1));                        // 2
// console.log(threeSumClosest([1, 2, 3, 4, 5, 6, 7, 8], 5));              // 6
// console.log(threeSumClosest([-1, -2, -4, -10, -3, 1, 2, 12, 1], 0));    // 0

// [-4, -1, 1, 2]
// [1, 2, 3, 4, 5, 6, 7, 8]
// [-10, -4, -3, -2, -1, 1, 1, 2, 12]


// Revised solution: two pointer

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let smallDiff = Number.MAX_SAFE_INTEGER;
  let result = 0;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i], left = i + 1; right = nums.length - 1;
    while (left < right) {
      let sum = current + nums[left] + nums[right];
      let difference = sum - target;

      if (difference === 0) {
        result = sum;
        return target;
      }
      else if (difference > 0) {
        if (difference < smallDiff) {
          smallDiff = difference;
          result = sum;
        }
        right++;
      } else {
        if (difference > smallDiff) {
          smallDiff = difference;
          result = sum;
        }
        left++;
      }
    }
  }

  return result;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));                      // 2
console.log(threeSumClosest([1, 2, 3, 4, 5, 6, 7, 8], 5));            // 6
console.log(threeSumClosest([-1, -2, -4, -10, -3, 1, 2, 12, 1], 0));  // 0



var threeSumClosest = function (nums, target) {
  let i, left, right, current, sum;
  let result = Number.MAX_SAFE_INTEGER;
  // tampered original
  nums.sort((a, b) => a - b);
  // two pointers
  for (i = 0; i < nums.length; i++) {
    current = nums[i];
    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      sum = current + nums[left] + nums[right];
      // get the closest sum
      if (Math.abs(target - sum) < Math.abs(target - result)) {
        result = sum;
      }
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        return sum;
      }
    }
  }
  return result;
};