var moveZeroes = function (nums) {
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[start];
      nums[start] = nums[i];
      nums[i] = temp;
      start++;
    }
  }
  return nums;
};
