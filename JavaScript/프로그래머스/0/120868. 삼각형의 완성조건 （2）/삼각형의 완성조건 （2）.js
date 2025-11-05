function solution(sides) {
    const result = [];
    const maxSide = Math.max(...sides);
    const minSide = Math.min(...sides);
    const sum = maxSide + minSide;
    
    for (let i = maxSide; i >= 1; i--) {
        if (minSide + i > maxSide) {
            result.push(i);
        }
    }
    
    for (let j = sum - 1; j > maxSide; j--) {
        result.push(j);
    }
    
    const set = new Set(result);
    
    return [...set].length;
}