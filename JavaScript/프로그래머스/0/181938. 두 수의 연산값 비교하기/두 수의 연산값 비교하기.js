function solution(a, b) {
    const sum = a + "" + b;
    const multiply = 2 * a * b;
    
    if (sum === multiply) {
        return sum;
    }
    
    return Math.max(sum, multiply);
}