function solution(s) {
    const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      s = s.replaceAll(word, i);
    }
  
    return Number(s);
}
