function solution(number) {
    const sqrtNum = Math.sqrt(number);
    return Number.isInteger(sqrtNum) ? 1: 2;
}