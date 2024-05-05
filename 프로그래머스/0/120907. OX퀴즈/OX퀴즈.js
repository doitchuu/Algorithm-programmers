function solution(quiz) {
  const quizAnswers = [];
  
  for (let i = 0; i < quiz.length; i++) {
    const equationParts = quiz[i].split(" ");
    
    if (equationParts.length !== 5) {
      quizAnswers.push("X");
      continue;
    }
    
    const operator = equationParts[1];
    const num1 = Number(equationParts[0]);
    const num2 = Number(equationParts[2]);
    const expected = Number(equationParts[4]);
    
    let result;
      
    if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "+") {
      result = num1 + num2;
    } else {
      quizAnswers.push("X");
        
      continue;
    }
    
    if (result === expected) {
      quizAnswers.push("O");
    } else {
      quizAnswers.push("X");
    }
  }
    
  return quizAnswers;
}
