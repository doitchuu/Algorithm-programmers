function solution(n) {
    const sortedNumber = [...String(n)].sort((a, b) => b - a).join("");
    return Number(sortedNumber);
}