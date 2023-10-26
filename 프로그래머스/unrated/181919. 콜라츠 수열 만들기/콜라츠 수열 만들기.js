function solution(n) {
    var answer = [];
    
    answer.push(n);
    
    while (n > 0) {
        if (n % 2 === 0) {
            n = n / 2;
            answer.push(n);
        } else {
            n = n * 3 + 1;
            answer.push(n);
        }
      
      if (n === 1) {
        return answer;
      }
    }
}
