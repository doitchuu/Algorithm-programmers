function solution(n) {
    const results = new Set();
    let num = 2;
    
    while (n > 1) {
        if (n % num === 0) {
            results.add(num);
            n /= num;
        } else {
            num++;
        }
    }
    
    return [...results];
}