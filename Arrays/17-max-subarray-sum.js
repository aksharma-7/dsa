//find a maximum sum of subarray of given size

// @method      Sliding Window
// @complexity  O(n)
const maxSubarraySum = (nums, n) => {
  let tempSum = 0;
  let maxSum = 0;
  let i = 0;
  if (nums.length < n) return null;
  while (i < n) {
    maxSum += nums[i];
    i++;
  }
  tempSum = maxSum;
  while (i < nums.length) {
    tempSum = tempSum - nums[i - n] + nums[i];
    maxSum = Math.max(tempSum, maxSum);
    i++;
  }
  return maxSum;
};

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
