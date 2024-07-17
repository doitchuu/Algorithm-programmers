function solution(k, tangerine) {
  const tangerineList = {};
  
  for (let i = 0; i < tangerine.length; i++) {
    if (!tangerineList[tangerine[i]]) {
      tangerineList[tangerine[i]] = 1;
      continue;
    } 
    
    tangerineList[tangerine[i]] += 1;
  }
  
  const sortedCounts = Object.values(tangerineList).sort((a, b) => b - a);
  let numberCount = 0;
  let total = 0;

  for (let count of sortedCounts) {
    total += count;
    numberCount++;
    
    if (total >= k) {
      break;
    }
  }
  
  return numberCount;
}
