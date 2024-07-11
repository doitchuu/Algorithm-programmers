function solution(cards1, cards2, goal) {
  let count = 0;

  for(let i = 0; i < goal.length; i++){
    const findWord = goal[i];
    
    if (cards1[0] === findWord) {
      cards1.shift();
      count++;
      
      continue;
    }
    
    if (cards2[0] === findWord){
      cards2.shift();
      count++;
      
      continue;
    }
    
    return "No";
  }

  return goal.length === count ? "Yes" : "No";
}