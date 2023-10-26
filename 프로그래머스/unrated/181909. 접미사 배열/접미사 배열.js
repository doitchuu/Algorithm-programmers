function solution(my_string) {
    var answer = [];
    const lastIndex = my_string.length -  1;

    for (let i = 1; i <= my_string.length; i++) {
        answer.push(my_string.slice(-i));
    }
  
    answer.sort();
  
    return answer;
}