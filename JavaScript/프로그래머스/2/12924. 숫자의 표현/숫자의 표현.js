function solution(n) {
    if (n === 1 || n === 2 || n === 4) {
        return 1;
    }
    
    let count = 0;
    let number = 1;
    
    while (number !== n) {
        let sum = 0;
        
        for (let i = number; i < n; i++) {
            if (sum < n) {
                sum += i;
            }
            
            if (sum === n) {
                count++;
                break;
            }
            
            if (sum > n) {
                break;
            }
        }
        
        number++;
    }
    
    return count + 1;
}