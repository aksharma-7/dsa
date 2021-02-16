// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// should be in place

// method        Two Pointer
// @Complexity   O(n)
const moveZeroes = (nums) => {
  let low = 0;
  let high = low + 1;
  while (high < nums.length) {
    if (nums[low] === 0 && nums[high] !== 0) {
      [nums[low], nums[high]] = [nums[high], nums[low]];
      low++;
      high++;
    } else if (nums[low] !== 0 && nums[high] === 0) {
      high++;
      low++;
    } else if (nums[high] !== 0 && nums[low] !== 0) {
      low++;
      high++;
    } else {
      high++;
    }
  }
  return nums;
};

// method        Push zeroes at end
// @Complexity   O(n)
//faster than the previous solution
const moveZeroesToEnd = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[count] = nums[i];
      count++;
    }
  }
  while (count < nums.length) {
    nums[count] = 0;
    count++;
  }
  return count;
};

const nums = [1, 0, 1];
// moveZeroes(nums);
moveZeroesToEnd(nums);
console.log(nums);
