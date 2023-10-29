function solution(a, b) {
  let answer = a + b;
  
  if (a === b) {
    answer = a;
    
    return answer;
  }
  
  if (a > b) {
    for (let i = 1; i <= (a - b) - 1; i++) {
      answer += (b + i);
    }
  } else {
    for (let i = 1; i <= (b - a) - 1; i++) {
      answer += (a + i);
    }
  }
  
  return answer;
}