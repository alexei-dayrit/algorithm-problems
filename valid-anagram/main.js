var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const stringLen = s.length;

  const sCount = {};
  const tCount = {};

  for (let i = 0; i < stringLen.length; i++) {
    if (!sCount[s[i]]) {
      sCount[s[i]] = 0;
    }
    if (!tCount[t[i]]) {
      tCount[t[i]] = 0;
    }
    sCount[s[i]]++;
    tCount[t[i]]++;
  }

  for (const props in sCount) {
    if (sCount[props] !== tCount[props]) {
      return false;
    }
  }

  return true;
};

// var isAnagram = function (s, t) {
//   const sorted1 = s.split('').sort().join();
//   const sorted2 = t.split('').sort().join();
//   if (sorted1 === sorted2) {
//     return true;
//   } else {
//     return false;
//   }
// };
