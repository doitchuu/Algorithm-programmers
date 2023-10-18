function solution(num_list) {
    var answer = 0;
    let evenNum = 0;
    let oddNum = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        if(i % 2 === 0) {
            evenNum += num_list[i];
          console.log(num_list[i]);
        } else {
            oddNum += num_list[i];
            console.log(num_list[i]);
          }
    }
        
    if (evenNum > oddNum) {
        answer = evenNum;
    } else {
        answer = oddNum;
    }
        
    return answer;
}