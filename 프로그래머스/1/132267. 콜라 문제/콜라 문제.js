function solution(a, b, n) {
  let number = n;
  let colaCount = 0;
  
  while (number >= a) {
    let newColas = Math.floor(number / a) * b;
    
    colaCount += newColas;
    number = number - Math.floor(number / a) * a + newColas; 
  }
  
  return colaCount;
}
