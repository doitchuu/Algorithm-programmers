function solution(myString) {
  var answer = [];

  const splitedStr = myString.split("x");

  for (let i = 0; i < splitedStr.length; i++) {
    answer.push(splitedStr[i].length);
  }

  return answer;
}