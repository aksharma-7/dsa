// method        rotate by one
// @Complexity   O(n*k)
const rotateAnArray = (nums, k) => {
  let count = 0;
  while (count < k) {
    nums.unshift(nums.pop());
    count++;
  }
  return nums;
};

// Doesn't work when k < nums.length
// method        using extra array O(k) - space complexity
// @Complexity   O(n*k)
const rotateAnArrayLoop = (nums, k) => {
  let i = nums.length - 1;
  let j = nums.length - 1;
  let count = 0;
  let arr = [];
  if (nums.length === 0) {
    return nums;
  }
  while (count < k) {
    arr.push(nums[i]);
    i--;
    count++;
  }
  j = nums.length - 1;
  i = nums.length - k - 1;
  while (i >= 0) {
    nums[j] = nums[i];
    i--;
    j--;
  }
  i = 0;

  while (i < k) {
    nums[j] = arr[i];
    i++;
    j--;
  }

  return nums;
};

// method        rotate by one
// @Complexity   O(k)
const rotateByOne = (nums) => {
  const temp = nums[nums.length - 1];
  let i = nums.length - 1;
  while (i >= 1) {
    nums[i] = nums[i - 1];
    i--;
  }
  nums[0] = temp;
  return nums;
};

const rotateArray = (nums, k) => {
  let i = 0;
  while (i < k) {
    rotateByOne(nums);
    i++;
  }
  return nums;
};

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
// rotateAnArray(nums, k);
// rotateAnArrayLoop(nums, k);
rotateArray(nums, k);
console.log(nums);
