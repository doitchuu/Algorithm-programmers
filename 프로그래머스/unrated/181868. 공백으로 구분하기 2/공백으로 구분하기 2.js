function solution(my_string) {
  var answer = [];
  let arr = my_string.split(" ");
    
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      answer.push(arr[i]);
    }
  }
  
  return answer;
}