function solution(numbers) {
    const numberList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    numberList.forEach((number) => numbers = numbers.split(number).join(numberList.indexOf(number)));
    
    return Number(numbers);
}