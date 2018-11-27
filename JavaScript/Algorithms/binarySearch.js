/**
 *  Write a function called binarySearch which accepts a sorted 
 *  array and a value and returns the index at which the value exists.
 *  Otherwise, return -1;
 */

function binarySearch(arr, target) {
  if (arr.length === 0) return -1;
  if (arr.length === 1) return arr[0] === target ? 0 : -1;
  let left = 0, right = arr.length;
  while (left < right) {
    let middle = Math.floor((right + left) / 2);
    if (arr[middle] === target) return middle;
    else if (arr[middle] > target) right = middle;
    else left = middle + 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); //  1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); //  2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); //  4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
