function solution(n, words) {
  const answer = [0, 0];
  
  for (let i = 0; i < words.length; i++) {
    if (i > 0 && words[i][0] !== words[i - 1].slice(-1)) {
      answer[0] = (i % n) + 1;
      answer[1] = Math.floor(i / n) + 1;
      
      return answer;
    }
    
    for (let j = 0; j < i; j++) {
      if (words[i] === words[j]) {
        answer[0] = (i % n) + 1;
        answer[1] = Math.floor(i / n) + 1;
      
        return answer;
      }
    }
  }
  
  return answer;
}
