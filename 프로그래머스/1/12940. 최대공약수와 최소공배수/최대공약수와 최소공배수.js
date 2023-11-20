function solution(n, m) {
  const maxNumber = Math.max(n, m);
  const minNumber = Math.min(n, m);
  const numbers = [minNumber, maxNumber];
  const measures = [];
  const results = [];
  
  
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j <= numbers[i]; j++) {
      if (numbers[i] % j === 0) {
        measures.push(j);
      }
    }
  }
  
  measures.sort((a, b) => b - a);
  
  for (let k = 0; k < measures.length; k++) {
    if (measures[k] === measures[k + 1]) {
      results.push(measures[k]);
      results.push((n * m) / measures[k]);
      break;
    }
  }
  
  return results;
}