// method        Sort and Two pointer
// @Complexity   O(n)
const containsDuplicate = (nums) => {
  nums.sort((a, b) => a - b);
  let low = 0;
  while (low < nums.length - 1) {
    let high = low + 1;
    if (nums[low] === nums[high]) {
      return true;
    }
    low++;
  }
  return false;
};

const nums = [1, 2, 3, 4];
console.log(containsDuplicate(nums));
