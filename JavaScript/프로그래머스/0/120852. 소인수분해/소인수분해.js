function solution(n) {
    const results = new Set();
    
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            results. add(i);
            n /= i;
        }
    }
    
    return [...results];
}