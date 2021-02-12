// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order

// method        Naive/Brute force
// @Complexity   O(n**2)
const arrayTwoSum = (nums, target) => {
  let sum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      if (sum === target) {
        return [i, j];
      }
      sum = 0;
    }
  }
};

// method        Two Pointer and sort
// @Complexity   Depending upon complexity of sorting algorithm
const arrayTwoSumTwoPointer = (nums, target) => {
  let sum = 0;
  let low = 0;
  let high = nums.length - 1;
  nums.sort((a, b) => a - b);
  while (low < high) {
    sum = nums[low] + nums[high];
    if (sum === target) {
      return [nums[low], nums[high]];
    } else if (sum < target) {
      low++;
    } else {
      high--;
    }
    sum = 0;
  }
};

const nums = [0, -1, 2, -3, 1];
const target = -2;
// console.log(arrayTwoSum(nums, target));
console.log(arrayTwoSumTwoPointer(nums, target));
