function solution(myString) {
    const strList = [...myString.toLowerCase()];
    let hasCharA = strList.indexOf("a");
    
    while (hasCharA !== -1) {
        strList[hasCharA] = "A";
        hasCharA = strList.indexOf("a");
    }

    return strList.join("");
}