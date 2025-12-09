function solution(n, left, right) {
    const result = [];
    
    for (let start = left; start <= right; start++) {
        const row = Math.floor(start / n);
        const column = start % n;
        
        result.push(Math.max(row + 1, column + 1));
    }
    
    return result;
}