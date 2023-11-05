function solution(num) {
  let answer = num;
  let count = 0;
    
  if (answer === 1) {
    return 0;
  }
    
  while (answer !== 1) {
    if (answer % 2 === 0) {
      answer = answer / 2;
      count++;
    } else {
       answer = answer * 3 + 1;
       count++;
    }
    
    if (count === 500) {
       count = -1;
       return count;
    }
  }
  
  return count;
}