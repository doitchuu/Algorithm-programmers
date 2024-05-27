function solution(sides) {
  const sortedSides = sides.sort((a, b) => a - b);
  const [a, b] = sortedSides;
  const maxSideSum = a + b;
  
  let count = 0;
  let anotherCount = 0;
  
  for (let i = b + 1; i < maxSideSum; i++) {
    count++;
  }
  
  for (let i = Math.abs(a - b) + 1; i <= b; i++) {
    anotherCount++;
  }
  
  return count + anotherCount;
}