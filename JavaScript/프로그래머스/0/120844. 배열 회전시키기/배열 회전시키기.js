function solution(numbers, direction) {
    if (direction === "right") {
        const temp = numbers.pop();
        numbers.unshift(temp);
    } else {
        const temp = numbers.shift();
        numbers.push(temp);
    }
    
    return numbers;
}