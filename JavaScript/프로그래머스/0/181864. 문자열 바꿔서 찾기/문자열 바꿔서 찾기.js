function solution(myString, pat) {
    const reversedPat = [...pat].map((char) => char === "A" ? "B" : "A").join("");
    return myString.includes(reversedPat) ? 1 : 0;
}