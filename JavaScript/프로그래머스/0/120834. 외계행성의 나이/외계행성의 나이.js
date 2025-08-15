function solution(age) {
    const charList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    return [...age.toString()].map((str) => charList[str]).join("");
}