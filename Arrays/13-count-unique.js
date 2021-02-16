//Count Unique values in sorted array

// @ Method      Two pointer
// @Complexity   O(n)
const unique = (arr) => {
  if (!arr.length) {
    return 0;
  }
  let count = 0;
  let low = 0;
  for (let i = 0; i < arr.length; i++) {
    let high = low + 1;
    if (arr[low] !== arr[high]) {
      count = count + 1;
    }
    low++;
  }
  return count;
};

console.log(unique([1, 1, 1, 1, 1, 2]));
