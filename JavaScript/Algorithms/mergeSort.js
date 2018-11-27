function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

function merge(a, b) {
  let result = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] > b[0]) {
      result.push(b[0]);
      b.splice(0, 1);
    } else {
      result.push(a[0]);
      a.splice(0, 1);
    }
  }

  if (a.length > 0) {
    result = result.concat(a);
  } else {
    result = result.concat(b);
  }

  return result;
}

console.log(mergeSort([19, 18, 17, 10, 9, 7, 6, 5, 4, 1, 2]));
