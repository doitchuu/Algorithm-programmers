function solution(q, r, code) {
    return [...code].filter((str, index) => index % q === r).join("");
}