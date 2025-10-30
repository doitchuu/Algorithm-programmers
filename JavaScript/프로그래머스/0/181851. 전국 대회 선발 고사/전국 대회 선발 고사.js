function solution(rank, attendance) {
  const valid = rank
    .map((r, i) => ({ rank: r, index: i }))
    .filter(({ index }) => attendance[index])
    .sort((a, b) => a.rank - b.rank);
  const [first, second, third] = valid.slice(0, 3);
    
  return 10000 * first.index + 100 * second.index + third.index;
}
