const mergeArrays = (arr1, arr2) => {
  length = arr1.length + arr2.length;
  let mergedArray = [];
  let i = 0;
  let j = 0;
  count = 0;
  while (count < length) {
    if (arr1[i] === arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
      j++;
    } else if (i < arr1.length && arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else if (j < arr1.length && arr1[i] > arr2[j]) {
      mergedArray.push(arr2[j]);
      j++;
    }
    count++;
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    count++;
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    count++;
    j++;
  }
  console.log(mergedArray);
};

arr1 = [0, 3, 4, 31];
arr2 = [4, 6, 30];
mergeArrays(arr1, arr2);
