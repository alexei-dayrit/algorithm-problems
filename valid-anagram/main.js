var isAnagram = function (s, t) {
  const sorted1 = s.split('').sort().join();
  const sorted2 = t.split('').sort().join();
  if (sorted1 === sorted2) {
    return true;
  } else {
    return false;
  }
};
