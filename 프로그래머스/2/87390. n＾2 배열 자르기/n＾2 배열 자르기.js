function solution(n, left, right) {
  const answers = [];
    
  for (let i = left; i <= right; i++) {
    answers.push(Math.max(Math.floor(i / n), i % n) + 1);
  }
    
  return answers;
}
