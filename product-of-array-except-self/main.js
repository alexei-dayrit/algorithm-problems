var productExceptSelf = function (nums) {
  let answer = [];
  let left = 1;
  let right = 1;

  for (let i = 0; i < nums.length; i++) {
    answer[i] = left;
    left = left * nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] = right * answer[i];
    right = right * nums[i];
  }

  return answer;
};
