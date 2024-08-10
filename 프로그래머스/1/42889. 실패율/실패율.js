function solution(N, stages) {
    const answer = [];
    let allPeople = stages.length;
  
    for(let i = 1; i <= N; i++) {
      const notClearPerson = stages.filter(elem => elem === i).length;
        answer.push({
            stage: i,
            fail: notClearPerson / allPeople,
        });
        allPeople -= notClearPerson;
    }
    
   return answer.sort((a, b) => b.fail - a.fail).map(elem => elem.stage);
}
