function solution(citations) {
  citations.sort((a, b) => b - a); 

  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    const candidate = i + 1; 
    if (citations[i] >= candidate) h = candidate;
    else break; 
  }

  return h;
}