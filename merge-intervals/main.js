var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);
  let current = intervals[0];
  const result = [current];

  for (let i = 1; i < intervals.length; i++) {
    const currentRight = current[1];
    const nextLeft = intervals[i][0];
    const nextRight = intervals[i][1];
    if (currentRight >= nextLeft) {
      current[1] = Math.max(currentRight, nextRight);
    } else {
      result.push(intervals[i]);
      current = intervals[i];
    }
  }
  return result;
};
