function solution(my_string, n) {
    const repeatedStrList = my_string.split("").map((str) => str.repeat(n));
    return repeatedStrList.join("");
}