function solution(hp) {
    let prey = hp;
    let answer = 0;
    
    if (prey % 5 <= 5) {
        answer += Math.floor(prey / 5);
        prey = prey % 5;
    } 
  
    if ((prey % 3) <= 3) {
        answer += Math.floor(prey / 3);
        prey = prey % 3;
    } 
  
    if (prey > 0) {
      answer += prey;
    }
  
    return answer;
}