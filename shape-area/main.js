function solution(n) {
  let area = 1;
  for (let nVal = 1; nVal <= n; nVal++) {
    area += nVal * 4 - 4
  }
  return area
}
