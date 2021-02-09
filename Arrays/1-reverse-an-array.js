// @ Method      Loop
// @Complexity   O(n)
const reverseArrayLoop = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
};

// @ Method      Recursion
// @Complexity   O(n)
const reverseArrayRecursion = (arr, start, end) => {
  if (start >= end) return;

  // [arr[start], arr[end]] = [arr[end], arr[start]];
  arr[start] = arr[start] + arr[end];
  arr[end] = arr[start] - arr[end];
  arr[start] = arr[start] - arr[end];

  reverseArrayRecursion(arr, start + 1, end - 1);
};

arr = [1, 2, 4, 5, 9, 2];
console.log(`Initial array is: ${arr}`);
// reverseArrayLoop(arr, 0, 5);
reverseArrayRecursion(arr, 0, 5);
console.log(`Reversed array is: ${arr}`);
