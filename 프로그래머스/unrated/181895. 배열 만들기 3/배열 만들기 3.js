function solution(arr, intervals) {
  var answer = [];
  const numberArr = intervals[0].concat(intervals[1]);
  let concatedArr = arr.slice(numberArr[0], numberArr[1] + 1);
  
  answer = concatedArr.concat(arr.slice(numberArr[2], numberArr[3] + 1));
  
  return answer;
}