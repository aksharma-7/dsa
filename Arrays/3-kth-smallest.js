// @method      Sorting
// @complexity  Depending on the complexity of sorting algorith
const kthSmallest = (arr, k) => {
  arr.sort((a, b) => a - b);

  return arr[k - 1];
};

arr = [12, 3, 5, 7, 19];
console.log(kthSmallest(arr, 2));

// Other methods - using min heap and max heap
