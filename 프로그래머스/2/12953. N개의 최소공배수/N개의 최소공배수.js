function gcd(a,b) {
  if (b === 0) {
    return a;
  } 
  
  if (a % b === 0) {
    return b;
  }
  
  return gcd(b, a % b);
}

function lcm(a,b) {
  return (a * b) / gcd(a, b);
}

function solution(arr){
  let answer = 1;
  
  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }
  
  return answer;
}
