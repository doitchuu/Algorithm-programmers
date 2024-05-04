function solution(l, r) {
  const answers = [];
  const regex = /^[0-1]*$/;
  
  for (let i = l; i <= r; i++) {
    if (i % 5 === 0 && regex.test(i / 5)) {
      answers.push(i);
    }
  }
  
  if (answers.length) {
    return answers;
  }
    
  return [-1];
}
