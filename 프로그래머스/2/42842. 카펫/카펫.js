function solution(brown, yellow) {
  const carpet = brown + yellow;
  const carpetNumbers = findDivisors(carpet);
  
  for (let i = 0; i < carpetNumbers.length; i++) {
    const width = carpetNumbers[i];
    const height = carpet / width;
    
    if ((width - 2) * (height - 2) === yellow) {
      return [height, width];
    }
  }
}

function findDivisors(number) {
  const results = [];
  
  for (let i = 3; i < Math.floor(number / 2); i++) {
    if (number % i === 0) {
      results.push(i);
    }
  }
  
  return results;
}
