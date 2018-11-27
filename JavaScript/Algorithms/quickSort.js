/**
 * 
 * Time Complexity: O(n)
 * 
 * @param {Array}  arr     Array of unsorted integers
 * @param {Number} start   Starting index in array
 * @param {Number} end     Ending index in array
 */
function pivot(arr, start = 0, end = arr.length+1) {
  
  // swap two numbers in array
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);

  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));   // [1, 2, 3, 4, 5, 6, 9]
