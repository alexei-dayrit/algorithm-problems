function solution(statues) {
  let counter = 0;
  statues.sort((a, b) => a - b);
  const totalIndexes = (statues[statues.length - 1] - statues[0]) + 1
  for (let i = 0; i < statues.length; i++) {
    if (statues.length === totalIndexes) {
      return counter;
    } else if (statues[i + 1] !== statues[i] + 1) {
      statues.splice(i + 1, 0, statues[i] + 1);
      counter++
    }
  }
}
