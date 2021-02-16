// @method      sorting
// @complexity  Depends upon complexity of sorting algorithm
const maxAndMinSorting = (arr) => {
  arr.sort();
  console.log(`Min and Max are: ${arr[0]} ${arr[arr.length - 1]}`);
};

// @method      linear search
// @complexity  O(n)
const maxAndMinLinearSearch = (arr) => {
  let max = 0;
  let min = Infinity;
  if (arr.length === 1) {
    min = arr[0];
    max = arr[0];
  }
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    } else if (element < min) {
      min = element;
    }
  });
  console.log(`Min and Max are: ${min} ${max}`);
};

// @method      Comparing Pairs
// @complexity  O(n)
const maxAndMinComparingPairs = (arr) => {
  let min;
  let max;
  let i;
  if (arr.length % 2 === 0) {
    if (arr[0] > arr[1]) {
      min = arr[1];
      max = arr[0];
    } else {
      min = arr[0];
      max = arr[1];
    }
    i = 2;
  } else {
    min = arr[0];
    max = arr[0];
    i = 1;
  }

  while (i < arr.length - 1) {
    if (arr[i] > arr[i + 1]) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i + 1] < min) {
        min = arr[i + 1];
      }
    } else {
      min = Math.min(min, arr[i]);
      max = Math.max(max, arr[i + 1]);
    }
    i += 2;
  }

  console.log(`Min and Max are: ${min} ${max}`);
};

const arr = [1000, 11, 445, 1, 330, 3000];
console.log(`Given array: ${arr}`);
// maxAndMin(arr);
// maxAndMinLinearSearch(arr);
maxAndMinComparingPairs(arr);
