var twoSum = function (nums, target) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let a = i + 1; a < nums.length; a++) {
      if ((nums[i] + nums[a]) === target) {
        result.push(i, a);
      }
    }
  }
  return result;
};
