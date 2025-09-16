function solution(n) {
    let count = 0;
    let result = 1;
    
    while (result <= n) {
        count++;
        result *= count;
    }
    
    return count - 1;
}