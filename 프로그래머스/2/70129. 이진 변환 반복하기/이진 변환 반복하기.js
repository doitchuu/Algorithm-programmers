function solution(s) {
  let copyString = s;
  let zeroCount = 0;
  let oneCount = 0;
  let transformationCount = 0;
  
  while(copyString !== "1") {
    for (let i = 0; i < copyString.length; i++) {
      if (copyString[i] === "0") {
        zeroCount++;
      } else {
        oneCount++;
      }
    }
    
    copyString = oneCount.toString(2);
    transformationCount++;
    oneCount = 0;
  }
  
  return [transformationCount, zeroCount];
}