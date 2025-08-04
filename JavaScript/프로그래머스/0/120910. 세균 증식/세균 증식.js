function solution(n, t) {
    let sum = n;
    
    for (let i = 1; i <= t; i++) {
        sum = sum * 2;
    }
    
    return sum;
}