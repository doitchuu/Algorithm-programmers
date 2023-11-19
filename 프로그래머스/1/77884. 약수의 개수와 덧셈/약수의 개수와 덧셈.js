function solution(left, right) {
  const allNumbers = [];
  let measureCount = 0;
  let result = 0;
  
  for (let i = left; i <= right; i++) {
    allNumbers.push(i);
  }
  
  for (let j = 0; j < allNumbers.length; j++) {
    for (let k = 1; k < allNumbers[j]; k++) {
      if (allNumbers[j] % k === 0) {
        measureCount++;
      }
    }
    
    if (measureCount % 2 === 0) {
      result += allNumbers[j];
    } else {
      result -= allNumbers[j];
    }
    
    measureCount = 0;
  }
  
  return Math.abs(result);
}