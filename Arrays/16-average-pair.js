//find pair in a sorted array whose average sum is equal to target

const averagePair = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let average = (nums[low] + nums[high]) / 2;
    if (average === target) {
      console.log(low, high);
      return;
    }
    if (average < target) {
      low++;
    } else if (average > target) {
      high--;
    }
  }
};

averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
