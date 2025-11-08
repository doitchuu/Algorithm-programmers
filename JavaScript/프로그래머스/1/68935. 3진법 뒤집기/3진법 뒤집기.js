function solution(n) {
    const nToStr = n.toString(3).split("").reverse().join("");
    return parseInt(nToStr, 3);
}