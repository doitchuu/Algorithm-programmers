function solution(d, budget) {
  const department = [...d].sort((a, b) => a - b);
  let count = 0;
  
  for (let i = 0; i < department.length; i++) {
    if (budget - department[i] >= 0) {
      budget -= department[i];
      count++;
    } 
  }

  return count;
}