function solution(my_string, is_prefix) {
    const prefixIndex = is_prefix.length - 1;
    var answer = 0;
    
    for (let i = 0; i <= prefixIndex; i++) {
        if (my_string[i] !== is_prefix[i]) {
            return answer = 0;       
        } else {
            answer = 1;
        }
    } return answer;
}