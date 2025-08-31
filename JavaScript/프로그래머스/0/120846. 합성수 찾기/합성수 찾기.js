function solution(n) {
    const result = [];
    
    for (let i = 4; i <= n; i++) {
        const numbers = [];
        
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                numbers.push(j);
            }
        }
        
        if (numbers.length >= 3) {
            result.push(i);
        }
    }
    
    return result.length;
}