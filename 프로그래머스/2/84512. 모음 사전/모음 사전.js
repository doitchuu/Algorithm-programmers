function solution(vowel) {
  const words = [];
  const vowels = ["A","E","I","O","U"];
  
  function makeNewWord(word) {
    if (word.length === 5) {
      return;
    }
    
    for (let i = 0; i < vowels.length; i++) {
      const newWord = word + vowels[i];
      
      words.push(newWord);
      makeNewWord(newWord);
    }
  }
  
  makeNewWord("");
  
  return words.indexOf(vowel) + 1;
}
