/**
 * RADIX SORT IMPLEMENTATION
 */


// get ith digit from num
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i) % 10);
}

// return count of digits in num parameter
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// return count of digits from largest number
function mostDigits(arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr.map(num => digitCount(num)));
}

// radix sort using helper methods
function radixSort(arr) {
  let loopCount = mostDigits(arr);

  for (let i = 0; i < loopCount; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      buckets[getDigit(arr[j], i)].push(arr[j]);
    }
    
    arr = [].concat(...buckets);
  }

  return arr;
}

console.log(radixSort([12, 2, 4, 1, 1, 24, 4123, 123, 4]));
console.log(radixSort([100, 99, 88, 44, 22, 11, 1, 2, 3, 4, 23, 53, 4, 3, 1]));
