// @method      swapping
// @complexity  O(n)
const moveNegativeAtBeginning = (arr) => {
  let j = 0;
  arr.forEach((element, index) => {
    if (element < 0) {
      [arr[index], arr[j]] = [arr[j], arr[index]];
      j++;
    }
  });
  return arr;
};

// @method      Two Pointer
// @complexity  O(n)
const moveNegativeAtBeginningUsingTwoPointer = (arr) => {
  left = 0;
  right = arr.length - 1;
  while (left <= right) {
    if (arr[left] < 0) {
      left++;
    }
    if (arr[left] > 0 && arr[right]) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    } else if (arr[left] > 0 && arr[right] > 0) {
      right--;
    }
  }
  return arr;
};

arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
// moveNegativeAtBeginning(arr);
// moveNegativeAtBeginningUsingTwoPointer(arr);
console.log(arr);
