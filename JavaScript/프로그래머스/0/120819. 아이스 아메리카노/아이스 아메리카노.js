function solution(money) {
    const cupsOfCoffee = Math.floor(money / 5500);
    const rest = money % 5500;
    
    return [cupsOfCoffee, rest];
}