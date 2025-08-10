function solution(array) {
    const result = array.sort((a, b) => a - b);
    const middle = Math.floor(result.length / 2);
    
    return result[middle];
}