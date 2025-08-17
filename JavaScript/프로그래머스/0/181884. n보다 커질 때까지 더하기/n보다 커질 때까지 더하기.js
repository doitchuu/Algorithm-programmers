function solution(numbers, n) {
    let sum = 0;
    
    numbers.forEach((number) => {
        if (sum <= n) {
            sum += number;
        }
    })
    
    return sum;
}