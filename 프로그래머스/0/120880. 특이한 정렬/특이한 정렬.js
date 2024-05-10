function solution(numlist, n) {
  const answers = [];
  const sortedNumbers = numlist.map((num) => {
    return { number: num, difference: Math.abs(num - n)}
  }).sort((a, b) => a.difference - b.difference);
  
  for (let i = 0; i < sortedNumbers.length; i++) {
    const noDifference = sortedNumbers[i + 1] && sortedNumbers[i].difference === sortedNumbers[i + 1].difference;
    
    if (noDifference) {      
      if (sortedNumbers[i].number <= sortedNumbers[i + 1].number) {
        answers.push(sortedNumbers[i + 1].number);
        answers.push(sortedNumbers[i].number);
        i++;
        
        continue;
      }
    }
    
    answers.push(sortedNumbers[i].number);
  }
  
  return answers;
}
