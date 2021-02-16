// @method      sort and compare
// @complexity  Depends upon sorting
const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  sortedStr1 = str1.split('').sort();
  sortedStr2 = str2.split('').sort();
  for (let i = 0; i < sortedStr1.length; i++) {
    if (sortedStr1[i] !== sortedStr2[i]) {
      return false;
    }
  }
  return true;
};

// @method      using counters
// @complexity  o(n)
const isAnagramCount = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
};

// @method      using single counter
// @complexity  0(n) //fastest
const isAnagramCountSingle = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter = {};
  for (let i = 0; i < str1.length; i++) {
    let key = str1[i];
    frequencyCounter[key]
      ? (frequencyCounter[key] += 1)
      : (frequencyCounter[key] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let key = str2[i];
    if (!frequencyCounter[key]) {
      return false;
    } else {
      frequencyCounter[key] -= 1;
    }
  }
  return true;
};

// console.log(isAnagram('asjbcs', 'askjas'));
// console.log(isAnagramCount('abcd', 'bacdaljs'));
console.log(isAnagramCountSingle('abcda', 'dbapc'));
