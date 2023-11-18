function solution(A,B){
    let answer = 0;
    const aString = [...A];
    const bString = [...B];
    
    aString.sort((a, b) => a - b);
    bString.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) {
        answer += (aString[i] * bString[i]);
    }

    return answer;
}