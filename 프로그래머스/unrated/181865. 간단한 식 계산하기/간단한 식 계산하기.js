function solution(binomial) {
  var answer = 0;
  const strToArr = binomial.split(" ");
  
  if (strToArr[1] === "+") {
    answer = Number(strToArr[0]) + Number(strToArr[2]);
  } else if (strToArr[1] === "-") {
    answer = Number(strToArr[0]) - Number(strToArr[2]);
  } else {
    answer = Number(strToArr[0]) * Number(strToArr[2]);
  }
  
    return answer;
}