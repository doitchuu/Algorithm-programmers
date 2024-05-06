function solution(common) {
  let answer = 0;
  
  for (let i = 0; i < common.length - 1; i++) {
    if (common[i + 1] % common[i] !== 0) {
      answer = common[common.length - 1] + (common[i + 1] - common[i]);
      
      return answer;
    }
    
  answer = common[common.length - 1] * (common[i + 1] / common[i]);
  }
  
  
  return answer;
}
