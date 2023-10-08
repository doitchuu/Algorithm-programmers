function solution(num_str) {
    var answer = 0;
    const strToArr = num_str.split("");
    
    for (let i = 0; i < strToArr.length; i++) {
        answer += Number(strToArr[i]);
    }
    return answer;
}