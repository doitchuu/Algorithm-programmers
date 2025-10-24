function solution(s) {
    const lowerString = s.toLowerCase();
    const strList = lowerString.split(" ");
    
    for (let i = 0; i < strList.length; i++) {
        const firstChar = strList[i][0];
        strList[i] = firstChar.toUpperCase() + strList[i].slice(1);
    }
    
    return strList.join(" ");
}
