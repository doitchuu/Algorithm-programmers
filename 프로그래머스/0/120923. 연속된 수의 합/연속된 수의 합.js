function solution(num, total) {
  const answers = [];
  const middleNumber = total / num;
  let index = 0;
  
  if (Number.isInteger(middleNumber)) {
    answers.push(middleNumber);
    
    index = (num - 1) / 2;
  } else {
    answers.push(Math.floor(middleNumber));
    answers.push(Math.ceil(middleNumber));
    
    index = (num - 2) / 2;
  }
  
  for (let i = 1; i <= (num - 1) / 2; i++) {
    answers.push(Math.ceil(middleNumber) + i);
    answers.unshift(Math.floor(middleNumber) - i);
  }
  
  return answers;
}