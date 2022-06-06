var groupAnagrams = function (strs) {
  const cache = {};

  for (let i = 0; i < strs.length; i++) {
    const sortedKey = strs[i].split('').sort().join('');
    if (!cache[sortedKey]) {
      cache[sortedKey] = [strs[i]];
    } else {
      cache[sortedKey].push(strs[i]);
    }
  }
  return Object.values(cache);
};

groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
