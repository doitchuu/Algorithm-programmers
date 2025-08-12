function solution(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const lastIndex = sortedNumbers.length - 1;
    
    return Math.max(sortedNumbers[0] * sortedNumbers[1], sortedNumbers[lastIndex - 1] * sortedNumbers[lastIndex]);
}