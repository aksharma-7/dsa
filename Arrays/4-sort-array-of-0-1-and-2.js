// @method      keeping count/Brute force
// @complexity  O(n)
const sortUsingCount = (arr) => {
  let countZero = 0;
  let countOne = 0;
  let countTwo = 0;
  arr.forEach((element) => {
    if (element === 0) {
      countZero++;
    }
    if (element === 1) {
      countOne++;
    }
    if (element === 2) {
      countTwo++;
    }
  });
  let i = 0;
  if (countZero) {
    let count = 0;
    while (count < countZero) {
      arr[i] = 0;
      i++;
      count++;
    }
  }
  if (countOne) {
    let count = 0;
    while (count < countOne) {
      arr[i] = 1;
      i++;
      count++;
    }
  }
  if (countTwo) {
    let count = 0;
    while (count < countTwo) {
      arr[i] = 2;
      i++;
      count++;
    }
  }
  return arr;
};

// @method      3-way Partitioning/ Dutch National flag Algo
// @complexity  O(n)
const sortThreeWayPartition = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]];
      low++;
      mid++;
    } else if (arr[i] == 1) {
      mid++;
    } else {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high--;
      i--;
    }
  }
  return arr;
};

arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
// sortUsingCount(arr);
sortThreeWayPartition(arr);
console.log(arr);
