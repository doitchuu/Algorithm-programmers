function solution(n) {
    const result = String(n).split("");
    return result.reduce((acc, cur) => Number(acc) + Number(cur), 0);
}