function solution(numbers) {
    let answer = 0;
    const comparedsum = 45;

    for (let i = 0; i < numbers.length; i++) {
        answer += numbers[i];
    }
    
    answer = comparedsum - answer;
    
    return answer;
}