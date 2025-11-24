function solution(a, b, n) {
    let result = 0;
    let rest = 0;
    
    while (n >= a) {
        const bonus = Math.floor(n / a) * b;
        
        result += bonus;
        rest = n % a;
        n = bonus + rest;
    }
    
    return result;
}