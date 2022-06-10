var longestCommonPrefix = function (strs) {
  let longest = '';
  if (strs.length === 0) return longest;

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let a = 0; a < strs.length; a++) {
      if (strs[a][i] !== char) return longest;
    }
    longest += char;
  }
  return longest;
};
