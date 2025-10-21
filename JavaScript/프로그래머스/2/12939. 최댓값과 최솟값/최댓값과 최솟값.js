function solution(s) {
    const strList = s.split(" ").sort((a, b) => a - b);
    return strList[0] + " " + strList[strList.length - 1];
}