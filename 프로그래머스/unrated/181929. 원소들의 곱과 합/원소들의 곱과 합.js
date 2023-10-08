function solution(num_list) {
    var answer = 0;
    let sumAnswer = 0;
    let multiAnswer = 1;
    
    for (let i = 0; i < num_list.length; i++) {
        sumAnswer += num_list[i];
        multiAnswer *= num_list[i];
    } 
    
    if ((sumAnswer * sumAnswer) < multiAnswer) {
        answer = 0
    } else {
        answer = 1;
    }
    return answer;
}