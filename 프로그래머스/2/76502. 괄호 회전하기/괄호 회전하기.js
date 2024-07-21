function solution(string) {
  let correctCount = 0;
  
  for (let i = 0; i < string.length; i++) {
    const rotatedString = string.slice(i) + string.slice(0, i);
    
    if (isValid(rotatedString)) {
      correctCount++;
    }
  }
  
  return correctCount;
}

function isValid(string) {
  const stack = [];
  
  for (const char of string) {
    if (char === "[" || char === "{" || char === "(") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      }
      
      let lastChar = stack.pop();
      
      if ((char === "]" && lastChar !== "[") || 
          (char === "}" && lastChar !== "{") || 
          (char === ")" && lastChar !== "(")) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
