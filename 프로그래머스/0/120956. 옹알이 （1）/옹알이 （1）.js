function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];

  return babbling.map((string) => {
      for (const word of words) {
        if (string.includes(word)) {
          string = string.replace(word, " ");
        }
      }
    
      return string;
    }).filter((string) => !string.trim()).length;
}

