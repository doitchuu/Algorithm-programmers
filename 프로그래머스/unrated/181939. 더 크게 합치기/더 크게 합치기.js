function solution(a, b) {
    let answer = 0;
    const numToStrA = "" + a;
    const numToStrB = "" + b;
    
    if (Number(numToStrA + numToStrB) > Number(numToStrB + numToStrA)) {
        answer = Number(numToStrA + numToStrB);
    } else {
        answer = Number(numToStrB + numToStrA);
    }
          
    return answer;
}