function solution(s) {
    let answer = true;
    let checkedNumber = /^[0-9]+$/; 
    
    if (s.length !== 4 && s.length !== 6) {
        answer = false;
    }
    
    if (checkedNumber.test(s) === false) {
        answer = false;
    }
    
    return answer;
}