function solution(n) {
    var answer = [];
    const numToStr = String(n);
    
    for (let i = numToStr.length - 1; i >= 0; i--) {
        answer.push(Number(numToStr[i]));
    }
    
    return answer;
}