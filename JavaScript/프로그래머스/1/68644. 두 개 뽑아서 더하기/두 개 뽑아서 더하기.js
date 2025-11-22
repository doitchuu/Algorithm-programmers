function solution(numbers) {
    const result = [];
    let queue = [];
    
    while(numbers.length !== 0) {
        queue.unshift(numbers.pop());
        
        for (number of numbers) {
            result.push(number + queue[0]);
        }
    }
    
    
    return [...new Set(result)].sort((a, b) => a - b);
}
