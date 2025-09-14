function solution(arr) {
    let result = arr;
    let num = 2;
    let zeros;
    
    if (arr.length === 1) {
        return arr;
    }
    
    while (num !== result.length) {
        if (num < result.length) {
            num *= 2;
        }
        
        if (num >= result.length) {
            const difference = num - result.length;
            
            zeros = new Array(difference).fill(0);
            result = result.concat(zeros);
        }
    }
    
    return result;
}