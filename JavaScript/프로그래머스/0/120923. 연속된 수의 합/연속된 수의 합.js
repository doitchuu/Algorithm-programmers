function solution(num, total) {
    let basic = total;
    let sum = 0;
    let count = 0;
    let result = [];
    
    if (total === 0) {
        basic = num;
    }
    
    for (let i = - basic; i <= basic; i++) {        
        if (count >= num) {
            const number = result.shift();
            sum -= number;
        }
        
        result.push(i);
        sum += i;
        count++;
        
        if (sum === total) {
            break;
        }
    }
    
    return result;
}