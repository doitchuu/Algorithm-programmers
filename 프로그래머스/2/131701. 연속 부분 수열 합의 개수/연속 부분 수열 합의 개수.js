function solution (elements) {
  const sequence = elements.concat(elements);
  const results = new Set();
  
  for (let i = 1; i <= sequence.length / 2; i++) {
    for (let j = 0; j < sequence.length / 2; j++) {
      const subArray = sequence.slice(j, i + j);
      const sum = subArray.reduce((acc, cur) => cur + acc);
      
      results.add(sum);
    }
  }
  
  return results.size;
}
