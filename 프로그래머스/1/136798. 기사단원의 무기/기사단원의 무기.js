function solution(number, limit, power) {
  let answer = 0;

  for (let num = 1; num <= number; num++) {
    const sqrt = Math.sqrt(num);
    let count = 0;

    for (let index = 1; index <= sqrt; index++) {
      if (num % index === 0) {
        if (num / index === index) {
          count += 1;
          continue;
        }
          
        count += 2;
      }
    }

    if (count > limit) {
      answer += power;
      continue;
    }
    
    answer += count;
  }

  return answer;
}
