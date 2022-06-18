var firstPalindrome = function (words) {
  let result = '';
  for (let a = 0; a < words.length; a++) {
    const reversed = words[a].split('').reverse().join('');
    if (reversed === words[a]) {
      result += words[a];
      return result;
    }
  }
  return result;
};
