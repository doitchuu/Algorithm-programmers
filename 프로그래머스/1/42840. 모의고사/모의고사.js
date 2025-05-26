function solution(answers) {
  const result = [];
  const people = [0,0,0];
  const length = answers.length;
  
  const person1 = fitArrayLength([1, 2, 3, 4, 5], length);
  const person2 = fitArrayLength([2, 1, 2, 3, 2, 4, 2, 5], length);
  const person3 = fitArrayLength([3, 3, 1, 1, 2, 2, 4, 4, 5, 5], length);
  
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === person1[i]) {
      people[0]++;
    }
    
    if (answers[i] === person2[i]) {
      people[1]++;
    }
    
    if (answers[i] === person3[i]) {
      people[2]++;
    }
  }
  
  const maxResult = Math.max(...people);
  
  for (let i = 0; i < people.length; i++) {
    if (people[i] === maxResult) {
      result.push(i + 1);
    }
  }
  
  return result;
}
  
function fitArrayLength (array, length) {
  return Array.from({ length }, (_, i) => array[i % array.length]);
}