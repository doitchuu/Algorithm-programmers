function solution(n) {
    var answer = Math.sqrt(n);
    
    if (Number.isSafeInteger(Math.sqrt(n))) {
        answer = Math.pow(Math.sqrt(n) + 1, 2);
    } else {
        answer = -1;
    }
    
    return answer;
}