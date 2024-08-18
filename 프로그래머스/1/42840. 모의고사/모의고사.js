function solution(answers) {
  let answer = [];
  const oneSupo = [1, 2, 3, 4, 5];
  const twoSupo = [2, 1, 2, 3, 2, 4, 2, 5];
  const threeSupo = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const oneSupoScore = answers.filter((value, index) => { return value === oneSupo[index % oneSupo.length] }).length;
  const twoSupoScore = answers.filter((value, index) => { return value === twoSupo[index % twoSupo.length] }).length;
  const threeSupoScore = answers.filter((value, index) => { return value === threeSupo[index % threeSupo.length] }).length;
  
  const maxScore = Math.max(oneSupoScore, twoSupoScore, threeSupoScore);

  if (oneSupoScore === maxScore) {
    answer.push(1);
  }
  
  if (twoSupoScore === maxScore) { 
    answer.push(2);
  }
  if (threeSupoScore === maxScore) { 
    answer.push(3);
  }

  return answer;
}
