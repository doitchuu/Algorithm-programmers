function solution(n) {
    let pizza = 6;
    let answer = 1;
    
    while (pizza % n !== 0) {
        pizza += 6;
        answer++;
    }
    
    return answer;
}