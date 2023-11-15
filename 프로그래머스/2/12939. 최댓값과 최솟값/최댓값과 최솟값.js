function solution(s){
  let answer = "";
  const stringToArray = s.split(" ");
  
  stringToArray.sort((a, b) => a - b);
  
  answer = stringToArray[0] + " " + stringToArray[stringToArray.length - 1];
  
  return answer;
}