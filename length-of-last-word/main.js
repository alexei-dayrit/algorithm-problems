var lengthOfLastWord = function (s) {
  const string = s.trim();
  const length = string.length;
  let index = length - 1;
  while (index >= 0 && (string[index] !== ' ')) {
    index--;
  }
  return length - 1 - index;
};
