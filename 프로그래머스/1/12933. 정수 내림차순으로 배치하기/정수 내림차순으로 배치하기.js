function solution(n) {
  let answer = 0;
  const numToStr = String(n).split("");
  
  numToStr.sort((a, b) => b - a);
  
  answer = Number(numToStr.join(""));
  
  return answer;
}