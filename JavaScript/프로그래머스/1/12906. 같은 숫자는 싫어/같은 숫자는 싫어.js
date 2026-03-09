function solution(arr) {
    let previous = arr[0];
    const result = [arr[0]];    
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === previous) {
            continue;
        }
        
        result.push(arr[i]);
        previous = arr[i];
    }
    
    return result;
}
