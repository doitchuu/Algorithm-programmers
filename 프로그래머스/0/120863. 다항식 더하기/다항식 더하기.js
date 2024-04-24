function solution(polynomial) {
  const polynomialList = polynomial.split(" + ");
  let numberResult = 0;
  let xResult = 0;
  
  for (let i = 0; i < polynomialList.length; i++) {
    if(polynomialList[i].includes("x")) {
      polynomialList[i] = polynomialList[i].replace("x", "");

      if (!polynomialList[i]) {
        xResult += 1;
      }
      
      xResult += Number(polynomialList[i]);
      continue;
    }
    
    numberResult += Number(polynomialList[i]);
  }
  
  if (xResult === 1) {
    xResult = "";
  }
  
  if (numberResult === 0) {
    return xResult + "x";
  }
  
  if (xResult === 0) {
    return numberResult + "";
  }
  
  return xResult + "x" + " + " + numberResult;
}