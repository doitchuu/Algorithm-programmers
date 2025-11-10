function solution(chicken) {
    let sum = 0;
    let chickens = chicken;
    
    while (chickens >= 10) {
        const service = Math.floor(chickens / 10);
        
        sum += service;
        chickens = service + chickens % 10;
    }
    
    return sum;
}