var isPalindrome = function (x) {
  const numsArr = x.toString().split('');
  if (numsArr.join('') === numsArr.reverse().join('')) return true;
  return false;
};
