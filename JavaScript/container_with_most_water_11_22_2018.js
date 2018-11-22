/**
 * Container with most water
 * Given n non - negative integers a1, a2, ..., an, where each represents 
 * a point at coordinate(i, ai).n vertical lines are drawn such that the 
 * two endpoints of line i is at(i, ai) and(i, 0).Find two lines, which 
 * together with x - axis forms a container, such that the container 
 * contains the most water.
 * 
 * Note: You may not slant the container and n is at least 2.
 * 
 * Example:
 * Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
 * Output: 49
 * 
 * https: //leetcode.com/problems/container-with-most-water/description/
 */

// maximize distance between walls of container
// and height of walls
// return area of container: 
//  height of shorter wall x distance between walls
//  in input array

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  if (height <= 1) return 0;
  if (height === 2) return Math.min(height[0], height[1]);
  let area = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let leftValue = height[left];
    let rightValue = height[right];
    let currentArea = Math.min(leftValue, rightValue) * (right - left);
    area = Math.max(area, currentArea);

    if (leftValue > rightValue) right--;
    else if (leftValue < rightValue) left++;
    else {
      left++;
      right--;
    }
  }

  return area;
};


console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));    // 49
