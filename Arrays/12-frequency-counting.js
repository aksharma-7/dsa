// method        Naive Solution
// @Complexity   O(n**2)
const isSquared = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(index, 1);
  }
  return true;
};

// method        Naive Solution
// @Complexity   O(n**2)
const isSquaredFrequencyCounting = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

arr1 = [2, 3, 4];
arr2 = [4, 16, 9];
// console.log(isSquared(arr1, arr2));
console.log(isSquaredFrequencyCounting(arr1, arr2));
