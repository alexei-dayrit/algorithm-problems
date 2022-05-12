var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    let neededNum = target - nums[i];
    if (obj[nums[i]] !== undefined) {
      return [obj[nums[i]], i]
    }
    obj[neededNum] = i;
  }
};
