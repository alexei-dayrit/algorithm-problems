var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let a = i + 1; a < nums.length; a++) {
      if (nums[i] === nums[a]) {
        return true
      }
    }
  }

  return false
};
