// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// @method      Kadane's Algorithm
// @complexity  O(n)
const maxSubArray = (nums) => {
  let max_so_far = 0;
  let max_ending_here = 0;

  for (let i = 0; i < nums.length; i++) {
    max_ending_here += nums[i];
    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
    }
    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
  }
  return max_so_far;
};

// @method      Kadane's Algorithm optimized works only when there are positive numbers as well
// @complexity  O(n)
const maxSubArrayOptimized = (nums) => {
  let max_so_far = 0;
  let max_ending_here = 0;

  for (let i = 0; i < nums.length; i++) {
    max_ending_here += nums[i];
    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
    }
    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
  }
  return max_so_far;
};

// @method      Kadane's Algorithm
// @complexity  O(n)
const maxSubArrayIndices = (nums) => {
  let max_so_far = 0;
  let max_ending_here = 0;
  start = 0;
  end = 0;
  s = 0;

  for (let i = 0; i < nums.length; i++) {
    max_ending_here += nums[i];
    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
      start = s;
      end = i;
    }
    if (max_ending_here < 0) {
      max_ending_here = 0;
      s = i + 1;
    }
  }
  console.log(start, end);
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums));
// maxSubArrayIndices(nums);
