function solution(myString, pat) {
    var answer = 0;
    const myStrToUpper = myString.toUpperCase();
    const patToUpper = pat.toUpperCase();
    
    if (myString.length < pat.length) {
        return answer;
    }
    if (myStrToUpper.includes(patToUpper)) {
        answer = 1;
    }
    
    return answer;
}
