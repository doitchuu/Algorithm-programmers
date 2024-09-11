function solution(s, skip, num) {
  const skipList = skip.split("").map((character, index) => skip.charCodeAt(index));
  
  const result = s.split("").map((character, index) => {
    let count = 0;
    let asciiCode = s.charCodeAt(index);
      
    while (count < num) {
      asciiCode += 1;
      asciiCode = asciiCode > 122 ? asciiCode - 26 : asciiCode;
        
      if (!skipList.includes(asciiCode)) {
          count++;
      }
    }
      
    return String.fromCharCode(asciiCode);
  });
    
  return result.join("");
}