function solution(x) {
    var answer = true;
    const strToNum = String(x);
    let sum = 0;
    
    for (let i = 0; i < strToNum.length; i++) {
        sum += Number(strToNum[i]);
    }
    
    if (x % sum !== 0) {
        answer = false;
    }
    
    return answer;
}
