function solution(numLog) {
    // 0 -> 1이 되려면 1을 더해야하고 1은 w
    // 1 -> 0이 되려면 -1을 빼야하는데 s
    // 기준값을 두고, 해당 기준값 다음 값이 되려면 어떤 값이 필요한 지 알아야함.
    let answer = "";
    let acc = numLog[0];
    const log = {
        "1": "w",
        "-1": "s",
        "10": "d",
        "-10": "a"
    }
    
    for (let i = 1; i < numLog.length; i++) {
        let result = numLog[i] - numLog[i - 1];
        answer += log[result];
    }
    
    return answer;
}