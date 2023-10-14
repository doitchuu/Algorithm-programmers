function solution(num_list) {
    var answer = 0;
    var multinum = 1;
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list.length > 10) {
            answer += num_list[i];
        } else {
            multinum *= num_list[i];
        }
    }
    
    if (num_list.length < 11) {
        return multinum;
    }
    
    return answer;
}