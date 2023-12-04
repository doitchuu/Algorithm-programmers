function solution(n) {
  let loop = n;
  let index = 1;
  let answer = 0;
  
  while (loop > 0) {
    if (loop % index === 0) {
      answer++;
    }
    
    loop = loop - index;
    index++;
  }
  
  return answer;
}
