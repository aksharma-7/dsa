//are there duplicates in arguments. There can be any number of arguments

// @method      frequency counter
// @complexity  O(n)
// space        O(n)
const areDuplicates = () => {
  let counter = {};
  for (let val in arguments) {
    counter[arguments[val]] = (counter[arguments[val]] || 0) + 1;
  }
  for (let key in counter) {
    if (counter[key] > 1) {
      return true;
    }
  }
  return false;
};

// @method      sort and two pinter
// @complexity  Depends upon sorting
// space        O(1)
const areDuplicatesSort = (...args) => {
  args.sort((a, b) => a - b);
  let low = 0;
  let high = 1;
  while (high < args.length) {
    if (args[low] === args[high]) {
      return true;
    }
    high++;
    low++;
  }
  return false;
};

// console.log(areDuplicates(1, 3, 2, 3, 5));
console.log(areDuplicatesSort(1, 3, 2, 3, 5));
