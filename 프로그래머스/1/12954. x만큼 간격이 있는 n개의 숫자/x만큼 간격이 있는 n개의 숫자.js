function solution(x, n) {
    var answer = [];
    const maximum = n * x;
  
  if (x > 0) {
    for (let i = x; i <= n * x; i += x) {
      answer.push(i);
    }
  } else if (x < 0) {
    for (let i = x; i >= n * x; i += x) {
      answer.push(i);
    }
  } else {
    for (let i = 0; i < n; i++) {
      answer.push(i * x);
    }
  }
    
    return answer;
}
