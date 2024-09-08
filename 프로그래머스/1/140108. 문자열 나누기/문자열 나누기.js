function solution(s) {
  let targetLetter = s[0];
  let differentCount = 0;
  let sameCount = 1;
  let result = 0;
  
  for (let i = 1; i < s.length; i++) {
    if (targetLetter === s[i]) {
      sameCount++;
    } else {
      differentCount++;
    }
    
    if (sameCount === differentCount) {
      result++;
      sameCount = 0;
      differentCount = 0;
      
      targetLetter = s[i + 1];
    }
  }
  
  return sameCount + differentCount ? result + 1 : result;
}
