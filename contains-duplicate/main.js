var containsDuplicate = function (nums) {
  const uniqueList = {};
  for (let i = 0; i < nums.length; i++) {
    // can use if (uniqueList[nums[i]])
    if (nums[i] in uniqueList) {
      return true;
    }
    uniqueList[nums[i]] = 'haha';
  }
  return false;
};

/* SLOWER SOLUTION

var containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let a = i + 1; a < nums.length; a++) {
      if (nums[i] === nums[a]) {
        return true;
      }
    }
  }

  return false;
};

*/
