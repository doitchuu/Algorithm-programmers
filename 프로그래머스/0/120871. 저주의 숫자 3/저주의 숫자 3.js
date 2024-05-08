function solution(n) {
  let multipliedThree = 0;
  
  for(let i = 1; i <= n; i++) {
    multipliedThree++;
    
    while(multipliedThree.toString().includes("3") || multipliedThree % 3 === 0) {
      multipliedThree++;
    }
  }
  
  return multipliedThree;
}