function solution(num_list, n) {
  var answer = [];

  const firstArr = num_list.slice(n, num_list.length);
  const secondArr = num_list.slice(0, n);

  answer = firstArr.concat(secondArr);

  return answer;
}