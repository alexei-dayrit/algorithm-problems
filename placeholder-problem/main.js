var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  const answer = [];
  for (let a = 0; a < nums.length; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b < nums.length; b++) {
      if ((b > a + 1) && nums[b] === nums[b - 1]) continue;
      for (let c = b + 1; c < nums.length; c++) {
        if ((c > b + 1) && nums[c] === nums[c - 1]) continue;
        if ((nums[a] + nums[b] + nums[c]) === 0) {
          answer.push([nums[a], nums[b], nums[c]]);
        }
      }
    }
  }
  return answer;
};
