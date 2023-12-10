function solution(n) {
  let binaryNumber = n.toString(2);
  let result = n;
  let oneCount = 0;
  let resultOneCount = 0;
  
  for (let i = 0; i < binaryNumber.length; i++) {
    if (Number(binaryNumber[i]) === 1) {
      oneCount++;
    }
  }
  
  while (oneCount !== resultOneCount) {
    result = result + 1;
    binaryNumber = result.toString(2);
    
    for (let j = 0; j < binaryNumber.length; j++) {
      if (Number(binaryNumber[j]) === 1) {
      resultOneCount++;
      }
    }
    
    if (oneCount !== resultOneCount) {
      resultOneCount = 0;
    }
  }
  
  return result;
}