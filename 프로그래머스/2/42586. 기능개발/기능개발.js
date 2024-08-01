function solution(progresses, speeds) {
  const answer = [];
  
  while (progresses.length) {
    let count = 0;
    
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    
    while (progresses[0] >= 100) {
      progresses.splice(0, 1);
      speeds.splice(0, 1);
      count++;
    }
    
    if (count) {
      answer.push(count);
    }
  }
  
  return answer;
}