function solution(n) {
    let number = 1;
    
    while (n % number !== 1) {
        number++;
    }
    
    return number;
}