function solution (picture, k) {
  const answer = [];
  let string = "";
  
  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < picture[i].length; j++) {
      string += picture[i][j].repeat(k);
    }
    
    for (let l = 0; l < k; l++) {
    answer.push(string);
    }
    
    string = "";
  }
  
  return answer;
}