function solution(str1, str2) {
    const hasStr2 = str1.includes(str2);
    return hasStr2 ? 1 : 2;
}