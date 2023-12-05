function solution(s) {
  const words = s.split(" ");
  let newWord = "";
  
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j % 2 === 0) {
        newWord += words[i][j].toUpperCase();
      } else {
      newWord += words[i][j].toLowerCase();
      }
    }
    
    if (i !== words.length - 1) {
      newWord += " ";
    }
  }
  
  return newWord;
}