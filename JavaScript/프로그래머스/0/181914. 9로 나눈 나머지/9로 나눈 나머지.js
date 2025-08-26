function solution(number) {
    const sum = [...number].reduce((acc, cur) => Number(acc) + Number(cur), 0);
    return Math.floor(sum % 9);
}