function solution(a, b) {
    let answer = 0;
    const stringSum = Number(a + "" + b);
    const multipliedNumber = 2 * a * b;
    
    if (stringSum > multipliedNumber) {
        answer = stringSum;
    } else {
        answer = multipliedNumber;
    }
    
    return answer;
}