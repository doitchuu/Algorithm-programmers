function solution(sizes) {
  const maxSizes = [];
  const minSizes = [];
  
  sizes.map((size, index) => {
    maxSizes[index] = Math.max(...size);
    minSizes[index] = Math.min(...size);
  })
  
  
  return Math.max(...maxSizes) * Math.max(...minSizes);
}
