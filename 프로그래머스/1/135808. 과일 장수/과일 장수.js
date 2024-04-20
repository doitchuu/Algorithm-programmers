function solution(k, m, score) {
  let answer = 0;
  const fruitsScore = score.sort((a, b) => b - a);
  const numberOfBoxes = Math.floor(fruitsScore.length / m);
  
  for (let i = 0; i < numberOfBoxes; i++) {
    const minScore = fruitsScore[(i + 1) * m - 1];
    answer += minScore * m;
  }

  return answer;
}
