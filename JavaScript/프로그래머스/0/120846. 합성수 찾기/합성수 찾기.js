function solution(n) {
    let result = 0;
    
    for (let i = 1; i <= n; i++) {
        let answer = [];
        
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                answer.push(j);
            }
        }
        
        if (answer.length >= 3) {
            result++;
        }
        
        answer = [];
    }
    
    return result;
}